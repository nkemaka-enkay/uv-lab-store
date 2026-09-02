export function generateWhatsAppMessage(
  cart: any[],
  customerName: string,
  customerPhone: string,
  totalFCFA: number
) {
  const itemsList = cart
    .map(
      (item) =>
        `- ${item.name} x${item.quantity} (${item.price_fcfa * item.quantity} FCFA)`
    )
    .join('\n');

  return (
    `*New Order from UV-LAB Store*\n\n` +
    `*Customer Name:* ${customerName}\n` +
    `*Phone:* ${customerPhone}\n\n` +
    `*Items:*\n${itemsList}\n\n` +
    `*Total Amount:* ${totalFCFA} FCFA`
  );
}

export function triggerWhatsAppRedirect(phoneNumber: string, message: string) {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.open(whatsappUrl, '_blank');
}