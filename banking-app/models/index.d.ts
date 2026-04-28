export interface UserDTO {
    id: number;
    name: string;
    address: string;
    balance: number;
}

export interface BankTransferDTO {
    id: number;
    amount: number;
    sender: UserDTO;
    receiver: UserDTO;
}