export default function CommissionEmailTemplate(props) {
  return `
    <div style="font-family: Arial; padding: 20px;">
      <h1 style="color:rgb(102, 234, 139);">Commission Request from ${props.name}</h1>
      <p><strong>Email:</strong> ${props.email}</p>
      <p><strong>Roblox Username:</strong> ${props.robloxUsername}</p>
      <p><strong>Discord:</strong> ${props.discordUsername}</p>
      <p><strong>Type:</strong> ${props.commissionType}</p>
      <p><strong>Budget:</strong> ${props.budget}</p>
      <p><strong>Timeline:</strong> ${props.timeline}</p>
      <h2>Description</h2>
      <p style="white-space: pre-wrap;">${props.description}</p>
    </div>
  `;
}

  