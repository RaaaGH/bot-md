let handler = async (m, { conn, usedPrefix }) => conn.sendButton(m.chat, `
╭─「 Donasi • Dana 」
│ • Tri [62895604670507]
│ • Gopay  [62895604670507]
│ • Dana  [62895604670507]
╰────
╭─「 *NOTE* 」
│ > Ingin donasi? Wa.me/62895604670507
╰────
`.trim(), wm, 'Menu', usedPrefix + 'menu', m) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler