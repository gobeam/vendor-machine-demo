import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import { Document, Schema as MongooseSchema } from 'mongoose';

export type OrderDocument = Order & Document;

export enum PaymentType {
    COIN = 'coin',
    CASH = 'cash',
}

@Schema()
export class Order {

    @Prop()
    quantity: number;

    @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Product' })
    product: string;

    @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Customer' })
    customer: string;

    @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'VendingMachine' })
    vendingMachine: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
