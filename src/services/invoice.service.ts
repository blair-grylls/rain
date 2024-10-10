export interface Recipient {
  name: string;
  email: string;
}

interface LineItem {
  name: string;
  price: number;
  quantity: number;
}

export interface Invoice {
  id: number;
  name: string;
  description: number;
  recipient: Recipient;
  lineItems: LineItem[];
}

let lineItems = [
  { name: "item 1", quantity: 2, price: 3 },
  { name: "item 2", quantity: 2, price: 4 },
];

let invoices = [
  {
    invoiceId: 1,
    lineItems: lineItems,
  },
  {
    invoiceId: 2,
    lineItems: lineItems,
  },
  {
    invoiceId: 3,
    lineItems: lineItems,
  },
];

let users = [
  {
    userId: 1,
    invoices,
  },
  {
    userId: 2,
    invoices,
  },
];

/**
 * Fetches example by id
 * @param exampleId
 * @returns example or null
 */
export const getInvoicesByUserId = async (userId: number) => {
  const user = users.find((user) => user.userId === userId);

  if (!user) {
    return null;
  }
  if (user.invoices === undefined) {
    return [];
  }

  return user.invoices;
};

/**
 *
 */
export const editInvoiceByInvoiceId = async (
  invoiceId: number,
  invoice: Partial<Invoice>
): Promise<Invoice> => {
  // get the invoice
  const foundInvoice = invoices.find(
    (invoice) => invoice.invoiceId === invoiceId
  );

  // handle no invoice

  // update the invoice
  const updatedInvoice = { ...foundInvoice, ...invoice };

  // recalculate total if needed
  if (updatedInvoice.lineItems !== foundInvoice?.lineItems) {
    console.log("update the total");
  }

  // return the invoice
  return updatedInvoice as Invoice;
};
