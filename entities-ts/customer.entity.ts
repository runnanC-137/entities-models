interface ICustomerProps {
    id?: string
    name: string
    email: string
    password?: string
    addressId?: string 
    createdAt?: Date
    updatedAt?: Date
}

export class Customer {
    id?: string
    name: string
    email: string
    password?: string
    addressId?: string 
    createdAt?: Date
    updatedAt?: Date

    constructor(props: ICustomerProps) {
        Object.assign(this, props)
    }
}