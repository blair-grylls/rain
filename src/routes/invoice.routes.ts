import { Router } from "express";
import { getInvoices } from "../controllers/invoice.controller";
import { editInvoiceByInvoiceId } from "../controllers/invoice.controller";

const invoiceRouter = Router();

invoiceRouter.get("/", getInvoices);
invoiceRouter.post("/", editInvoiceByInvoiceId);

export { invoiceRouter };
