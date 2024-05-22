export const map = [
    {
        "id":0,
        "name": "kitchen",
        "directions": [null, "cafeteria", null, null],
        "isOpen": true,
        "itemsInside": [
            {
                "id":0,
                "type":"weapon",
                "name":"gun",
                "class":"ranged"
            },
            {
                "id":1,
                "type":"weapon",
                "name":"knife",
                "class":"melee"
                
            }
        ],
        "peopleInside": [
            {
                "id":0,
                "name":"Steve",
                "gender":"M",
                "isAlive":true,
                "items": ["gun"]
            },
            {
                "id":1,
                "name":"Vanessa",
                "gender":"F",
                "isAlive":true,
                "items": []
            },
            {
                "id":2,
                "name":"Wanda",
                "gender":"F",
                "isAlive":true,
                "items": []
            }
        ]
    },
    {
        "id":0,
        "name": "cafeteria",
        "directions": [null, "corridor", null, "kitchen"],
        "isOpen": true,
        "itemsInside": [
            
        ],
        "peopleInside": [
            {
                "id":2,
                "name":"Leale",
                "gender":"F",
                "isAlive":true,
                "items": ["cake"]
            }
        ]
    },
    {
        "id":0,
        "name": "corridor",
        "directions": ["classrom", "reception", "bedroom", "cafeteria"],
        "isOpen": true,
        "itemsInside": [
            
        ],
        "peopleInside": [
            {
                "id":2,
                "name":"Leale",
                "gender":"F",
                "isAlive":true,
                "items": ["cake"]
            }
        ]
    },
    
]

