let aventurero = {
    nombre: "Gusitavo",
    puntos: 0,
    rango: "Registro"
};

const misionesFaciles = [
    { id: "F1", desc: "40 Raw Meat, 20 Light Hide", pts: 15 },
    { id: "F2", desc: "15 Wool Scraps, 40 Sunflower", pts: 15 },
    // Añade el resto aquí...
];

const misionesMedias = [
    { id: "M1", desc: "30 Raw Meat, 15 Heavy Hide", pts: 50 },
    { id: "M2", desc: "20 Silk Scraps, 30 Lavender", pts: 50 },
];

function mostrarTablon(tipo) {
    const container = document.getElementById('misiones-container');
    container.innerHTML = "";
    
    const lista = tipo === 'facil' ? misionesFaciles : misionesMedias;
    const bloqueado = (tipo === 'medio' && aventurero.rango === 'Registro');

    lista.forEach(m => {
        const div = document.createElement('div');
        div.className = "mision-item";
        div.innerHTML = `
            <span><strong>${m.id}:</strong> ${m.desc}</span>
            <button onclick="completarMision(${m.pts})" ${bloqueado ? 'disabled' : ''}>
                ${bloqueado ? '🔒 Bloqueado' : 'Completar'}
            </button>
        `;
        container.appendChild(div);
    });
}

function completarMision(pts) {
    aventurero.puntos += pts;
    actualizarInterfaz();
}

function actualizarInterfaz() {
    document.getElementById('disp-puntos').innerText = aventurero.puntos;
    const porcentaje = Math.min(aventurero.puntos, 100);
    document.getElementById('barra').style.width = porcentaje + "%";

    if (aventurero.puntos >= 100 && aventurero.rango === "Registro") {
        aventurero.rango = "Bronce";
        document.getElementById('disp-rango').innerText = aventurero.rango;
        alert("¡Gusitavo ha ascendido a Rango Bronce!");
    }
}

// Cargar tablón inicial
mostrarTablon('facil');
