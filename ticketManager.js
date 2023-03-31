

// Clases:

class TicketManager{

    // private
    #baseProfitPrice = 1.15;    //Precio Base de Ganancia.


    constructor(){
        this.events = [];     
    }

    getEvents = () => {
        return this.events;
    }

    addEvent = ({name, place, price, capacity = 50, date = new Date().toLocaleDateString()}) => {
        
        if(!name||!place||!price){              //Validacion para que los datos lleguen correctamente.
            console.log("Datos incompletos")
            return null;
        }


        const event = {
            name,
            place,
            price: price*this.#baseProfitPrice,
            capacity,
            date,
            participants:[],
            // se puede crear un ID con un ternario (?)
        }


        //Creador ID:
        if(this.events.length === 0){ 
            event.id = 1;
        }else{                  
            const lastEvent = this.events[this.events.length-1]; //busca la cantidad de elementos en el ARRAY y resta uno para igualar al Index del mismo!
            event.id = lastEvent.id + 1
        }


        // Pusheo el evento listo al Array:
        this.events.push(event);
    }

    addParticipant = (eventId, userId) => {

        // validacion de evento existente:
        const validationEventId = this.events.findIndex((e)=>{e.id == eventId});

        console.log(validationEventId);

    }



}   //Fin de clase.


// INICIO DE PROGRAMA:
// declaro una nueva instancia:

const ticketManager = new TicketManager();  //Se instancia un objeto de la clase TicketManager




const newEvent = {
    name: "Recital: Los Palmeras",
    place: "Luna Park",
    price: 1000
}
const newEvent2 = {
    name: "Recital: Los Pericos",
    place: "Aloha",
    price: 2000
}
const newEvent3 = {
    name: "Recital: Los Pericos",
    place: "Aloha",
    price: 2000
}

ticketManager.addEvent(newEvent);
ticketManager.addEvent(newEvent2);
ticketManager.addEvent(newEvent3);



console.log(ticketManager.getEvents()) ;

// ticketManager.addParticipant(0);

ticketManager.addParticipant(1);