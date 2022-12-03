const tbody = document.getElementById("tbody");

const getTabla = async () => {
  const response = await fetch(
    "https://http-nodejs-production-a135.up.railway.app/getAll"
  );

  const data = await response.json();
  console.log(data);
  const filas = [];

  data.forEach((element) => {
    filas.push(`
      <tr>
        <td align="center">${element.nombre_sala}</td>
        <td align="center">${element.letra}</td>
        <td align="center">${element.nombre_maestra}</td>
      </tr>
    `);
  });

  tbody.innerHTML = filas.join("");
};

getTabla();