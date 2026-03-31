import { Repository } from "typeorm";

export abstract class Controller {
    repository: Repository<any>;

    getAll = async (req, res) => {
        try {
            const entities = await this.repository.find();

            res.json(entities);
        } catch (err) {
            this.handleError(res, err);
        }
    };

    getOne = async (req, res) => {
        try {
            const id = req.params['id'];
            const entity = await this.repository.findOneBy({ id: id });
            if (!entity) {
                return this.handleError(res, null, 404, 'No entity is exists with the given ID.');
            }

            res.json(entity);
        } catch (err) {
            this.handleError(res, err);
        }
    };

    create = async (req, res) => {
        try {
            const entityToSave = this.repository.create(req.body);
            delete entityToSave['id'];

            const entitySaved = await this.repository.save(entityToSave);

            res.json(entitySaved);
        } catch (err) {
            this.handleError(res, err);
        }
    };

    update = async (req, res) => {
        try {
            const entityToUpdate = this.repository.create(req.body);
            if (!entityToUpdate.id) {
                return this.handleError(res, null, 400, 'ID should be defined.');
            }

            const currentEntity = await this.repository.findOneBy({ id: entityToUpdate.id });
            if (!currentEntity) {
                return this.handleError(res, null, 404, 'Entity does not exists with the given ID.');
            }

            const updatedEntity = await this.repository.save(entityToUpdate);

            res.json(updatedEntity);
        } catch (err) {
            this.handleError(res, err);
        }
    };

    delete = async (req, res) => {
        try {
            const id = req.params['id'];
            const deletedEntity = await this.repository.findOneBy({ id: id });
            if (!deletedEntity) {
                return this.handleError(res, null, 404, 'No entity is exists with the given ID.');
            }

            await this.repository.remove(deletedEntity);
            res.send();
        } catch (err) {
            this.handleError(res, err);
        }
    };

    handleError = (res, err, status = 500, message = 'Unkown server error.') => {
        if (err) {
            console.error(err);
        }

        res.status(status).json({ error: message });
    };
}