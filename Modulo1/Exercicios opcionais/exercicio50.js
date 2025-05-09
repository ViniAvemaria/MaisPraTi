/* 50. Desenvolva um pequeno sistema de reserva de hotéis usando JavaScript. O sistema
deverá ser capaz de interagir com o usuário através do console do navegador e manter
um registro das reservas e hotéis disponíveis. Utilize objetos e arrays para gerenciar as
informações. Não é necessário interface gráfica, apenas funcionalidade lógica. */

const prompt = require("prompt-sync")();

function addHotel() {
    const id = ++uniqueHotelId;
    const name = prompt("Nome: ");
    const city = prompt("Cidade: ").toLowerCase();
    const totalRooms = Number(prompt("Quartos totais: "));
    const availableRooms = Number(prompt("Quartos disponíveis: "));

    return { id, name, city, totalRooms, availableRooms };
}

function searchHotelByCity() {
    const city = prompt("Qual o nome da cidade? ").toLowerCase();
    const hotelsAtCity = [];

    for (const hotel of Object.values(hotels)) {
        if (hotel.city === city) {
            hotelsAtCity.push(hotel);
        }
    }
    return hotelsAtCity;
}

function makeReserve() {
    const clientName = prompt("Qual o seu nome? ");
    const hotelId = Number(prompt("Qual o id do hotel? "));

    if (!(hotelId in hotels)) return 0;
    if (hotels[hotelId]["availableRooms"] === 0) return -1;

    const reserveId = ++uniqueReserveId;
    hotels[hotelId]["availableRooms"] -= 1;
    return { reserveId, hotelId, clientName };
}

function cancelReserve() {
    const reserveId = Number(prompt("Qual o Id da reserva? "));

    if (!(reserveId in reserves)) return false;

    const hotelId = reserves[reserveId]["hotelId"];
    hotels[hotelId]["availableRooms"] += 1;
    delete reserves[reserveId];
    return true;
}

function displayReserves() {
    for (const [id, reserve] of Object.entries(reserves)) {
        const hotel = hotels[reserve.hotelId];
        console.log(`\nId da reserva: ${id}\
            \nCliente: ${reserve.clientName}\
            \nId do hotel: ${hotel.id}\
            \nNome do hotel: ${hotel.name}\n`);
    }
}

let uniqueHotelId = 0;
let uniqueReserveId = 0;

const hotels = {};
const reserves = {};
let running = true;

while (running) {
    console.log(
        "1- Adicionar hotéis\
        \n2- Buscar hotéis por cidade\
        \n3- Fazer reserva\
        \n4- Cancelar reserva\
        \n5- Listar reservas\
        \n0- Sair"
    );
    const option = Number(prompt("Digite uma opção: "));
    console.log("");

    switch (option) {
        case 1:
            const hotel = addHotel();
            hotels[hotel.id] = hotel;
            console.log(`\nHotel ${hotel.name} adicionado com sucesso!\n`);
            break;

        case 2:
            const hotelsAtCity = searchHotelByCity();
            if (hotelsAtCity.length === 0) console.log("\nNenhum hotel encontrado.\n");
            else {
                for (const hotel of hotelsAtCity) {
                    console.log(
                        `\nId: ${hotel.id} \nHotel: ${hotel.name} \nQuartos disponíveis ${hotel.availableRooms}\n`
                    );
                }
            }
            break;

        case 3:
            const reserve = makeReserve();
            if (!reserve) {
                console.log("\nNão foi possível encontrar o Id do hotel.\n");
            } else if (reserve < 0) {
                console.log("\nO hotel selecionado não tem quartos disponíveis.\n");
            } else {
                reserves[reserve.reserveId] = reserve;
                const hotel = hotels[reserve.hotelId];
                console.log(`\nReserva para o hotel ${hotel.name} feita com sucesso!\n`);
            }
            break;

        case 4:
            if (cancelReserve()) console.log("\nReserva cancelada com sucesso!\n");
            else console.log("\nId da reserva não foi encontrado.\n");
            break;

        case 5:
            if (Object.keys(reserves).length === 0) console.log("Nenhuma reserva encontrada.\n");
            else displayReserves();
            break;

        case 0:
            running = false;
            console.log("Encerrando...");
            break;

        default:
            console.log("Opção não encontrada");
            break;
    }
}
