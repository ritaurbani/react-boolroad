const partecipanti = [
    {
        "id": 1,
        "nome": "Mario",
        "cognome": "Rossi",
        "email": "mario.rossi@email.com",
        "telefono": "+39 320 1234567",
        "codice_fiscale": "RSSMRA80A01H501Z",
        "id_trip": 1
    },
    {
        "id": 2,
        "nome": "Luca",
        "cognome": "Bianchi",
        "email": "luca.bianchi@email.com",
        "telefono": "+39 333 9876543",
        "codice_fiscale": "BNCLCU85B02F205X",
        "id_trip": 1
    },
    {
        "id": 3,
        "nome": "Giulia",
        "cognome": "Verdi",
        "email": "giulia.verdi@email.com",
        "telefono": "+39 345 6789012",
        "codice_fiscale": "VRDGLL90C03D612Y",
        "id_trip": 1
    },
    {
        "id": 4,
        "nome": "Elena",
        "cognome": "Ferrari",
        "email": "elena.ferrari@email.com",
        "telefono": "+39 328 4567890",
        "codice_fiscale": "FRRLNE95D04C351W",
        "id_trip": 1
    },
    {
        "id": 5,
        "nome": "Antonio",
        "cognome": "Esposito",
        "email": "antonio.esposito@email.com",
        "telefono": "+39 339 1122334",
        "codice_fiscale": "SPSNTN88E05A662V",
        "id_trip": 1
    },

    {
        "id": 6,
        "nome": "Roberto",
        "cognome": "D'Angelo",
        "email": "roberto.dangelo@email.com",
        "telefono": "+39 320 2345678",
        "codice_fiscale": "DNGRTB75A01D612Z",
        "id_trip": 2
    },
    {
        "id": 7,
        "nome": "Maria Chiara",
        "cognome": "",
        "email": "maria.chiara@email.com",
        "telefono": "+39 331 5678901",
        "codice_fiscale": "CGRMRC91E02F205X",
        "id_trip": 2
    },
    {
        "id": 8,
        "nome": "Claudia",
        "cognome": "Moretti",
        "email": "claudia.moretti@email.com",
        "telefono": "+39 329 1234567",
        "codice_fiscale": "MRTCDL92D04D612Y",
        "id_trip": 2
    },
    {
        "id": 9,
        "nome": "Giovanni",
        "cognome": "Ricci",
        "email": "giovanni.ricci@email.com",
        "telefono": "+39 340 9876543",
        "codice_fiscale": "RCCGVN80B01C351W",
        "id_trip": 2
    },
    {
        "id": 10,
        "nome": "Francesco",
        "cognome": "Gatti",
        "email": "francesco.gatti@email.com",
        "telefono": "+39 320 4567890",
        "codice_fiscale": "GTTFNC72A02D612Y",
        "id_trip": 2
    },

    {
        "id": 11,
        "nome": "Sara",
        "cognome": "Luciani",
        "email": "sara.luciani@email.com",
        "telefono": "+39 331 2345678",
        "codice_fiscale": "LCNSRA85B04C351W",
        "id_trip": 3
    },
    {
        "id": 12,
        "nome": "Stefano",
        "cognome": "Barbieri",
        "email": "stefano.barbieri@email.com",
        "telefono": "+39 335 5678901",
        "codice_fiscale": "BRBFSN95T01F205X",
        "id_trip": 3
    },
    {
        "id": 13,
        "nome": "Elena",
        "cognome": "Corti",
        "email": "elena.corti@email.com",
        "telefono": "+39 333 6789012",
        "codice_fiscale": "CRTENA86D04F612Z",
        "id_trip": 3
    },
    {
        "id": 14,
        "nome": "Paolo",
        "cognome": "Rossi",
        "email": "paolo.rossi@email.com",
        "telefono": "+39 340 1234567",
        "codice_fiscale": "RSSPLA91B02D205X",
        "id_trip": 3
    },
    {
        "id": 15,
        "nome": "Martina",
        "cognome": "Sassi",
        "email": "martina.sassi@email.com",
        "telefono": "+39 329 3456789",
        "codice_fiscale": "SSMRTN85C04D351W",
        "id_trip": 3
    },

    {
        "id": 16,
        "nome": "Tommaso",
        "cognome": "Pellini",
        "email": "tommaso.pellini@email.com",
        "telefono": "+39 320 2345678",
        "codice_fiscale": "PLLTMS71A01D612Z",
        "id_trip": 4
    },
    {
        "id": 17,
        "nome": "Valentina",
        "cognome": "Moro",
        "email": "valentina.moro@email.com",
        "telefono": "+39 338 6789012",
        "codice_fiscale": "MRVLNT88C02F205X",
        "id_trip": 4
    },
    {
        "id": 18,
        "nome": "Riccardo",
        "cognome": "Puglisi",
        "email": "riccardo.puglisi@email.com",
        "telefono": "+39 331 2345678",
        "codice_fiscale": "PGLRCD85T01C351W",
        "id_trip": 4
    },
    {
        "id": 19,
        "nome": "Claudia",
        "cognome": "Fabbri",
        "email": "claudia.fabbri@email.com",
        "telefono": "+39 320 3456789",
        "codice_fiscale": "FBRCLD85A03D612Y",
        "id_trip": 4
    },
    {
        "id": 20,
        "nome": "Giorgio",
        "cognome": "Romano",
        "email": "giorgio.romano@email.com",
        "telefono": "+39 340 2345678",
        "codice_fiscale": "RMNGHR84T01D612Z",
        "id_trip": 4
    },

    {
        "id": 21,
        "nome": "Dario",
        "cognome": "Alfieri",
        "email": "dario.alfieri@email.com",
        "telefono": "+39 339 5678901",
        "codice_fiscale": "LFRDRI82C01D612Z",
        "id_trip": 5
    },
    {
        "id": 22,
        "nome": "Caterina",
        "cognome": "Fontana",
        "email": "caterina.fontana@email.com",
        "telefono": "+39 340 2345678",
        "codice_fiscale": "FNTCTR85T01F205X",
        "id_trip": 5
    },
    {
        "id": 23,
        "nome": "Lucia",
        "cognome": "Ferrari",
        "email": "lucia.ferrari@email.com",
        "telefono": "+39 320 1234567",
        "codice_fiscale": "FRRLUC83D03D612Y",
        "id_trip": 5
    },
    {
        "id": 24,
        "nome": "Giulia",
        "cognome": "Romano",
        "email": "giulia.romano@email.com",
        "telefono": "+39 339 9876543",
        "codice_fiscale": "RMNGGL90T01D612Z",
        "id_trip": 5
    },
    {
        "id": 25,
        "nome": "Leonardo",
        "cognome": "Volpi",
        "email": "leonardo.volpi@email.com",
        "telefono": "+39 328 2345678",
        "codice_fiscale": "VPLNDR80A01F205X",
        "id_trip": 5
    }
];


export default partecipanti