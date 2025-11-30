
export default function ContactEmailTemplate(props) {
  return `
  <div style="font-family: Arial; padding: 20px;">
      <h1 style="color:rgb(34, 227, 13);">Message from ${props.name}</h1>
      <p style="white-space: pre-wrap;">${props.message}</p>
    </div>
  `;
}
