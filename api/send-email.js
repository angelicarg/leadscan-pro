export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, message: 'Method Not Allowed' });
    }

    try {
        const { to, subject, body, companyName } = req.body || {};
        console.log(`[VERCEL EMAIL DISPATCH] Destino: ${to} | Empresa: ${companyName}`);

        return res.status(200).json({
            success: true,
            sender: '"Aruana Digital" <aruanadigital@aruanadigital.com>',
            message: `E-mail enviado com sucesso via Aruana Digital para ${companyName} (${to})!`,
            simulated: true
        });
    } catch (err) {
        return res.status(400).json({ success: false, message: 'Erro no processamento de envio.' });
    }
}
