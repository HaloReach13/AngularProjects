import { Controller } from "./base.controller";
import { AppDataSource } from "../data-source";
import { BankTransfer } from "../entity/BankTransfer";
import { User } from "../entity/User";

export class TransactionController extends Controller {
    repository = AppDataSource.getRepository(BankTransfer);
    userRepository = AppDataSource.getRepository(User);

    create = async (req, res) => {
        try {
            const transactionSave = this.repository.create(req.body as BankTransfer);

            if (!transactionSave.sender?.id || !transactionSave.receiver!.id) {
                this.handleError(res, null, 400, 'Küldő és fogadó megadása kötelező!');
                return;
            }

            const sender = await this.userRepository.findOneBy({ id: transactionSave.sender.id });
            const receiver = await this.userRepository.findOneBy({ id: transactionSave.receiver.id });

            if (!sender || !receiver) {
                this.handleError(res, null, 404, 'Nem létező küldő vagy fogadó!');
                return;
            }

            if (sender.id == receiver.id) {
                this.handleError(res, null, 409, 'A küldő és a fogadó nem lehet ugyanaz!');
                return;
            }

            if (transactionSave.amount < 1) {
                this.handleError(res, null, 400, 'Az összegnek pozitívnak kell lennie!');
                return;
            }

            if (sender.balance < transactionSave.amount) {
                this.handleError(res, null, 400, 'A küldő egyenlege túl alacsony!');
                return;
            }

            sender.balance -= transactionSave.amount;
            receiver.balance += transactionSave.amount;
            await this.userRepository.save([ sender, receiver ]);

            const transactionSaved = await this.repository.save(transactionSave);
            res.json(transactionSaved);
        } catch (err) {
            this.handleError(res, err);
        }
    }
}