import { createStore } from "vuex";

export default createStore({
  state: {
    products: [
      {
        id: 1,
        name: 'Sheer Pullover T-shirt',
        img: 'https://img101.urbanic.com/v1/goods-pic/ab87119c042f46bc90b33174a0c5e777UR_w750_q90.webp',
        price: 2300,
        collecton: 'test 1212',
        options: [
          'https://img101.urbanic.com/v1/goods-pic/ab87119c042f46bc90b33174a0c5e777UR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/ab87119c042f46bc90b33174a0c5e777UR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/ab87119c042f46bc90b33174a0c5e777UR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/ab87119c042f46bc90b33174a0c5e777UR_w750_q90.webp',
        ]
      },
      {
        id: 2,
        name: 'Straight Leg Jeans',
        img: 'https://img101.urbanic.com/v1/goods-pic/cab14c206e5445a59ec8737cd3f30ee1UR_w750_q90.webp',
        price: 2490,
        collecton: 'test 11',
        options: [
          'https://img101.urbanic.com/v1/goods-pic/cab14c206e5445a59ec8737cd3f30ee1UR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/cab14c206e5445a59ec8737cd3f30ee1UR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/cab14c206e5445a59ec8737cd3f30ee1UR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/cab14c206e5445a59ec8737cd3f30ee1UR_w750_q90.webp',
        ]
      },
      {
        id: 3,
        name: 'Jacquard Denim Jacket with Rhinestone',
        img: 'https://img101.urbanic.com/v1/goods-pic/b351bedacab64eb69422562654a0e077UR_w750_q90.webp',
        price: 7990,
        collecton: 'test 32',
        options: [
          'https://img101.urbanic.com/v1/goods-pic/b351bedacab64eb69422562654a0e077UR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/b351bedacab64eb69422562654a0e077UR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/b351bedacab64eb69422562654a0e077UR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/b351bedacab64eb69422562654a0e077UR_w750_q90.webp',
        ]
      },
      {
        id: 4,
        name: 'Pocket Wide Leg Jeans',
        img: 'https://img101.urbanic.com/v1/goods-pic/acc514b979ed4884aaa0897748dbdb6fUR_w750_q90.webp',
        price: 2290,
        collecton: 'test 12',
        options: [
          'https://img101.urbanic.com/v1/goods-pic/acc514b979ed4884aaa0897748dbdb6fUR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/acc514b979ed4884aaa0897748dbdb6fUR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/acc514b979ed4884aaa0897748dbdb6fUR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/acc514b979ed4884aaa0897748dbdb6fUR_w750_q90.webp',
        ]
      },
      {
        id: 5,
        name: 'Flare Leg Denim Jeans',
        img: 'https://img101.urbanic.com/v1/goods-pic/52e4d7ccc79e4e7e88dc451cfb368b9fUR_w750_q90.webp',
        price: 3690,
        collecton: 'test 6',
        options: [
          'https://img101.urbanic.com/v1/goods-pic/52e4d7ccc79e4e7e88dc451cfb368b9fUR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/52e4d7ccc79e4e7e88dc451cfb368b9fUR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/52e4d7ccc79e4e7e88dc451cfb368b9fUR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/52e4d7ccc79e4e7e88dc451cfb368b9fUR_w750_q90.webp',
        ]
      },
      {
        id: 6,
        name: 'Pocket Denim Jumpsuit with Refelctive Binding',
        img: 'https://img101.urbanic.com/v1/goods-pic/ccdc04b204924dd0afc4f8f57f8f681eUR_w750_q90.webp',
        price: 7990,
        collecton: 'test 5',
        options: [
          'https://img101.urbanic.com/v1/goods-pic/ccdc04b204924dd0afc4f8f57f8f681eUR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/ccdc04b204924dd0afc4f8f57f8f681eUR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/ccdc04b204924dd0afc4f8f57f8f681eUR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/ccdc04b204924dd0afc4f8f57f8f681eUR_w750_q90.webp',
        ]
      },
      {
        id: 7,
        name: 'Patchwork Denim Top with Rhinestone',
        img: 'https://img101.urbanic.com/v1/goods-pic/6dbf2a2d463145d1994dd985af80d38dUR_w750_q90.webp',
        price: 4290,
        collecton: 'test 4',
        options: [
          'https://img101.urbanic.com/v1/goods-pic/6dbf2a2d463145d1994dd985af80d38dUR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/6dbf2a2d463145d1994dd985af80d38dUR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/6dbf2a2d463145d1994dd985af80d38dUR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/6dbf2a2d463145d1994dd985af80d38dUR_w750_q90.webp',
        ]
      },
      {
        id: 8,
        name: 'Buttoned Denim A-Line Skirt',
        img: 'https://img101.urbanic.com/v1/goods-pic/8e012cc6606e4b7895fcabd5d88fcc96UR_w750_q90.webp',
        price: 3290,
        collecton: 'test 1',
        options: [
          'https://img101.urbanic.com/v1/goods-pic/8e012cc6606e4b7895fcabd5d88fcc96UR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/8e012cc6606e4b7895fcabd5d88fcc96UR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/8e012cc6606e4b7895fcabd5d88fcc96UR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/8e012cc6606e4b7895fcabd5d88fcc96UR_w750_q90.webp',
        ]
      },
      {
        id: 9,
        name: 'Seam Denim Straight Skirt',
        img: 'https://img101.urbanic.com/v1/goods-pic/7ccff19ccef04261b1c2309d7fb128f5UR_w1440_q90.webp',
        price: 2690,
        collecton: 'test 2',
        options: [
          'https://img101.urbanic.com/v1/goods-pic/7ccff19ccef04261b1c2309d7fb128f5UR_w1440_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/7ccff19ccef04261b1c2309d7fb128f5UR_w1440_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/7ccff19ccef04261b1c2309d7fb128f5UR_w1440_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/7ccff19ccef04261b1c2309d7fb128f5UR_w1440_q90.webp',
        ]
      },
      {
        id: 10,
        name: 'Jumpsuit',
        img: 'https://img101.urbanic.com/v1/goods-pic/3d7cf0e503fc4ad3b5ce3851dbdf584fUR_w750_q90.webp',
        price: 3990,
        collecton: 'test 3',
        options: [
          'https://img101.urbanic.com/v1/goods-pic/3d7cf0e503fc4ad3b5ce3851dbdf584fUR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/3d7cf0e503fc4ad3b5ce3851dbdf584fUR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/3d7cf0e503fc4ad3b5ce3851dbdf584fUR_w750_q90.webp',
          'https://img101.urbanic.com/v1/goods-pic/3d7cf0e503fc4ad3b5ce3851dbdf584fUR_w750_q90.webp',
        ]
      },
    ],

    tradeFairs: [
      {
        id: 1,
        title: "SIGN & LED China 2024",
        slug: "SIGN-&-LED-China-2024",
        date: "19-21 Sept 2024",
        price: "1,09,000",
        image: "https://rctrips.com/assets/sign-china-thumb.jpg",
      },
      {
        id: 2,
        title: "RubberTech China 2024",
        slug: "RubberTech-China-2024",
        date: "19-21 Sept 2024",
        price: "1,09,000",
        image: "https://rctrips.com/assets/rubbertech-thumb.jpg",
      },
      {
        id: 3,
        title: "Wire & Tube China 2024",
        slug: "Wire-&-Tube-China-2024",
        date: "25-28 Sept 2024",
        price: "1,20,000",
        image: "https://rctrips.com/assets/wire-tube-thumb.jpg",
      },
      {
        id: 4,
        title: "CPHI Milan 2024",
        slug: "CPHI-Milan-2024",
        date: "8-10 Oct 2024",
        price: "1,13,000",
        image: "https://rctrips.com/assets/cphi-milan-thumb.jpg",
      },
      // {
      // id: 5,
      // title: "CMEF China 2024",
      // slug: "CMEF-China-2024",
      // date: "12-15 Oct 2024",
      // price: "1,00,000",
      // image: "https://rctrips.com/assets/cmef-healtcare.jpg",
      // },
      // {
      //   id: 6,
      //   title: "ITMA ASIA & CITME 2024",
      //   slug: "ITMA-ASIA-&-CITME-2024",
      //   date: "14-18 Oct 2024",
      //   price: "1,06,000",
      //   image: "https://rctrips.com/assets/cphi-milan-thumb.jpg",
      // },
      // {
      //   id: 7,
      //   title: "Canton Fair China 2024",
      //   slug: "Canton-Fair-China-2024",
      //   date: "15-19 23-27 Oct 2024",
      //   price: "1,15,000",
      //   image: "https://rctrips.com/assets/canton-fair.jpg",
      // },
      // {
      //   id: 8,
      //   title: "Fenestration Bau 2024",
      //   slug: "Fenestration-Bau-2024",
      //   date: "16-19 Oct 2024",
      //   price: "1,07,000",
      //   image: "https://rctrips.com/assets/fenestration-thumb.jpg",
      // },
      // {
      //   id: 9,
      //   title: "Glasstec Dusseldorf 2024",
      //   slug: "Glasstec-Dusseldorf-2024",
      //   date: "22-24 Oct 2024",
      //   price: "1,06,000",
      //   image: "https://rctrips.com/assets/glasstec-3.jpg",
      // },
      // {
      //   id: 10,
      //   title: "Medica Düsseldorf 2024",
      //   slug: "Medica-Düsseldorf-2024",
      //   date: "10-15 10-17 Nov 2024",
      //   price: " 2,10,000",
      //   image: "https://rctrips.com/assets/medica-thumb.jpg",
      // },
    ],
    packages: [
      {
        id: 1,
        title: "Varanasi",
        type: "Domestic",
        package: 'flight services',
        sid: "varanasi",
        date: "19-21 Sept 2024",
        country: "India",
        price: "1,09,000",
        image: "/img/varanasi.png",
        icons: [
          { icon: 'bi-globe', image: "img/travel/flight.svg", name: 'flight' },
          { icon: 'bi-globe', image: "img/travel/visa.svg", name: 'visa' },
          { icon: 'bi-globe', image: "img/travel/hotel.svg", name: 'hotel' },
          { icon: 'bi-globe', image: "img/travel/meal.svg", name: 'meal' },
          { icon: 'bi-globe', image: "img/travel/sight.svg", name: 'Sight' },
        ],
        gallery: [
          "/img/dubaicenter/1.png",
          "/img/dubaicenter/2.png",
          "/img/dubaicenter/3.png",
        ],
        description: "Varanasi is a city in the northern Indian state of Uttar Pradesh dating to the 11th century B.C. Regarded as the spiritual capital of India, the city draws Hindu pilgrims who bathe in the Ganges River’s sacred waters and perform funeral rites. Along the city's winding streets are some 2,000 temples, including Kashi Vishwanath, the “Golden Temple,” dedicated to the Hindu god Shiva.",
        inclusions: [
          "2 Nights Accommodation in Varanasi",
          "1 Nights Accommodation in Prayagraj",
          "1 Night Accommodation in Ayodhya",
          "4 Breakfast & 4 Dinner",
          "Pick up & Drop Ex – Varanasi",
          "All transfers & Sightseeing by A/c Pvt Vehicle",
          "All toll tax, parking charges, driver charges, fuel cost inclusive",
        ],
        exclusions: [
          "Any Airfare / Train Ticket",
          "Monument Entrance fee",
          "Cost for Supplementary service, Up-gradation Charges, Tour Guide, VIP Darshan etc",
          "Cost for personal expenses such as laundry, bottled water, soft drinks, incidentals & porter charges.",
          "Any kind of Tips for Driver",
          "Activity charges, Boat Ride, Tonga Ride, Rickshaw Ride, Auto Ride, etc.",
          "Lunch",
          "Anything not specifically mentioned under the head “Prices included”",
          "Room Heater Charges",
          "Tips, Insurance, Laundry, Phone Calls.",
          "Any Kind of Drinks (Alcoholic, Mineral, Aerated)",
        ],
        itinerary: [
          {
            title: "Day 01: Arrival Varanasi & Evening Ganga Aarti",
            subtitle: " Meal: Dinner",
            description: "Arrival at Varanasi Airport / Railway Station. Upon arrival transfer to hotel. Kashi is the oldest City in the World, Kashi is also known as Varanasi. Varanasi is so pure that even a dip in the River Ganges, is believed to wash away all the sins. The city is known to be the land of Moksh (Salvation). Evening proceed for Aarti Ceremony at Holy River Ganga. After visit transfer to hotel. Dinner & overnight stay at hotel in Varanasi.",
          },
          {
            title: "Day 02: Varanasi Full Day Sightseeing",
            subtitle: "Meal: Breakfast | Dinner",
            description: "Early morning pick up from hotel, take Holy dip bath of the Holy River Ganga. Then we will be taken for a Boat ride(at your own cost) on the Ganges.It is a mystical and spiritual experience as you watch people offering water to the Sun God and devotees taking holy dip in the Ganges.We will visit all the famous Ghats of Varanasi via boat. After that proceed for full day Varanasi sightseeing start from Kalbhairav Temple: It is known as the most ancient temple of Varanasi located near the VishesharGanj.God Kal Bhairav is believed to be the “Kotwal of Sati pind”.Without his permission no one can even touch to the Sati pind.After that visit Kashi Vishwanath Temple: The Kashi Vishwanath temple is one of the 12 Jyotirlingas dedicated to Lord Shiva, and it is the most important temple in Varanasi.Mentioned in Skanda Purana, it is as old as the city and a significant pilgrimage for millions of Hindus.After visit back to hotel for breakfast. After breakfast Tulsi Manas Mandir: Another famous temple in the city, the Tulsi Manas Mandir is known for its historical and cultural importance rather than religious affiliations.After that visit Annapurna Temple: Annapurna temple is dedicated to the Annapurna or Annapoorna Mata, the Goddess of Food or the Goddess of Nourishment (Anna means food and Purna means complete or full), Mata Parvati.Visit Durga Mata Mandir: Dedicated to Goddess Durga, the Durga Mata Mandir is an important temple dedicated to a female goddess.Constructed in the 18th century, it is believed that the goddess idol was not made by humans but appeared on its own.After that visit Sankat Mochan Temple: The second most visited temple in Varanasi after Kashi Vishwanath, the Sankat Mochan Temple is devoted to Lord Hanuman.Situated on the Assi river banks, Goswami Tulsidas established the temple in the early 16th century.Then visit Banaras Hindu University(BHU): The Banaras Hindu University(BHU), a premier educational institute in India, lies in Varanasi.After Visit transfer to hotel.Overnight stay at hotel in Varanasi.",

          },
          {
            title: "Day 03: Varanasi – Prayagraj",
            subtitle: "Meal: Breakfast | Dinner",
            description: "After Breakfast check-out from hotel & Drive to Prayagraj. Upon arrival transfer to hotel & check in. then proceed to visit Prayagraj sightseeing visit Triveni Sangam (Confluence of 03 Holy Rivers Ganga, Yamuna & inside Saraswati) & take a holy bath at Triveni Sangam. After that visit Hanuman Temple & Akshayavat. Then proceed to visit Anand Bhawan. After visit drive back to hotel & Overnight stay at hotel in Prayagraj.",

          },
          {
            title: "Day 04: Prayagraj – Ayodhya ",
            subtitle: "Meal: Breakfast | Dinner",
            description: "After Breakfast check out from hotel & Drive to Ayodhya. Upon arrival transfer to hotel & Check in. After Fresh & up Reach Sarayu Ghat (Ram Ki Paidi) for Holy dip & bath. Ram ki Paidi comprises a series of ghats located on the bank of the river Sarayu and is widely used as a bathing ghat by the devotees of Lord Ram. It is believed that the sacred river Sarayu washes away the sins of those taking a dip in it and purifies their soul. Then visit Shri Nageshwar Nath Mandir: the temple of Nageshwarnath is said to have been established by Kush, the son of Rama. Legend is that Kush lost his armlet, while bathing in the Saryu, which was picked up by a Nag-Kanya, who fell in love with him. As she was a devotee of Shiva, Kush erected this temple for her. Then proceed to visit Shri Hanuman Garhi Mandir: Hanuman Garhi is a 10th-century Hindu temple dedicated to Lord Hanuman. It is one of the most important temples in Ayodhya as it is customary to visit Hanuman Garhi before visiting the Ram Temple in Ayodhya. It is believed that Lord Hanuman lived at the temple site guarding Ayodhya. After that Evening Experience the divine Saryu Aarti Ceremony at Ram ki Paidi. After that proceed to visit Dashrath Bhavan: is the original residence of King Dashrath- the ruler of Ayodhya and father to Lord Sri Ram. Popularly known as Bada Asthan or Badi Jagah, Dashrath Mahal houses magnificent shrines of King Ram. It is situated 50m away from Hanuman garhi. Then visit Kanak Bhawan, also meaning Golden Palace, this temple is also known as Sone-ka-Ghar. It is a holy site dedicated to the Hindu deity Lord Rama and his wife, Goddess Sita. It is believed that this shrine was gifted to Rama and Sita by the former’s stepmother, Kaikeyi. After visit back to hotel & Overnight in Ayodhya",
          },
          {
            title: "Day 05: Ayodhya – Varanasi Drop",
            subtitle: "Meal: Breakfast",
            description: "Breakfast at hotel, Then Proceed to visit Shri Ram Mandir: (Shri Ram Janmabhoomi) is believed to have been the birthplace of the Hindu deity, Lord Ram, a principal deity of Hinduism. According to the Indian epic Ramayan, Ram, Lord Vishnu’s seventh manifestation, is said to have grown up along Ajodhya’s river Sarayu. The Ram Janmabhoomi is a highly revered site for Hindu devotees. After visit check out from hotel & Drive to Varanasi. Upon arrival transfer to Varanasi Airport /Railway Station.",
          },
        ],
        overview: {
          columns: [
            'NO. OF PAX',
            'DELUXE PACKAGE COST',
            'SUPER DELUXE PACKAGE COST',
            'PREMIUM PACKAGE COST',
            'LUXURY PACKAGE COST',
            'TYPE OF TRANSPORT',
          ],
          data: [
            ["02 PAX", "21,900", "26,624", "30,118", "39,692", "SADAN"],
            ["04 PAX", "19,300", "22,816", "27,380", "36,884", "CRYSTA"],
            ["06 PAX", "17,000", "21,332", "24,896", "34,400", "CRYSTA"],
            ["08 PAX", "16,900", "21,224", "24,788", "34,292", "TEMPO TRAVELER"],
            ["10 PAX", "16,000", "20,252", "23,816", "33,320", "TEMPO TRAVELER"],
          ],
        },
        hotel: {
          columns: [
            "Category",
            "Varanasi",
            "Prayagraj",
            "Ayodhya"
          ],
          data: [
            ["Standard", "The Elegance // Dev Residency", "Naveen Continental // Prayag Inn // Orchard One", "Avadh Sunshine Palace"],
            ["Deluxe", "Arcadia", "Hotel Rama // Continental // Hira Inn", "Krinoscco"],
            ["Deluxe", " Costa Riviera", "Placid // Millennium Inn", " Cygnett Collection KK Hotel"],
            ["Super Deluxe", "Radisson", "Kanha Shyam // The Legend", "Park Inn by Radisson // The Ramayana "],
          ]
        }
      },
      {
        id: 2,
        title: "Kashmir",
        type: "Domestic",
        sid: "kashmir",
        package: 'flight services',
        date: "19-21 Sept 2024",
        country: "India",
        price: "1,09,000",
        image: "/img/kashmir.png",
        icons: [
          { icon: 'bi-globe', image: "img/travel/flight.svg", name: 'flight' },
          { icon: 'bi-globe', image: "img/travel/visa.svg", name: 'visa' },
          { icon: 'bi-globe', image: "img/travel/hotel.svg", name: 'hotel' },
          { icon: 'bi-globe', image: "img/travel/meal.svg", name: 'meal' },
          { icon: 'bi-globe', image: "img/travel/sight.svg", name: 'Sight' },
        ],
        gallery: [
          "/img/dubaicenter/1.png",
          "/img/dubaicenter/5.png",
          "/img/dubaicenter/6.png",
        ],
        description: "Kashmir is the northernmost geographical region of the Indian subcontinent. Until the mid-19th century, the term 'Kashmir' denoted only the Kashmir Valley between the Great Himalayas and the Pir Panjal Range.",
        inclusions: [
          "03 Night Stay in Srinagar Hotel",
          "01 Night Stay in Houseboat at Dal Lake",
          "Welcome Drink on Arrival",
          "All Tolls, Driver Allowance, Parking and Service charges",
          "All Possible Transfers and Sightseeing as per itinerary on Disposal basis",
          "Cab for 2 Pax (Ac Toyota-Etios) & 4 Pax – 6 Pax (Ac Toyota-Innova)",
          "One Hour Boat/Shikara Ride in Famous Dallake",
          "Pick-up and Drop at Srinagar Airport",
          "Daily Breakfast & Dinner Only",
          "Well Trained, Driver cum Tour Guide",
        ],
        exclusions: [
          "Lunch @ INR 450/- (Only Veg-Meals) & INR-650/- (Both Veg & Non-Veg) (Price based on Per Person per Lunch)",
          "Garden and Monument Entry Fee @ Rs 500/P.P.",
          "Baisaran, Kashmir, Dnow & Dabyab Valley at Pahalgam (Pony/Horse) @ Rs 1500/P.P.",
          "Tuliyan Lake at Pahalgam (By Pony/Horse) @ Rs 2500/P.P.",
          "Aru valley, Betaab valley & Chandanwari at Pahalgam (Union Vehicle)@4000/Private-Cab",
          "Gondola ride tickets up to First Phase at Gulmarg @ 1000/P.P",
          "Gondola ride tickets both First & Second Phase at Gulmarg @ 2000/P.P",
          "Thajwas Glacier at Sonmarg (Pony/Horse) @ Rs 1500/P.P.",
          "Drang-Frozen Waterfall Sightseeing at",
          "Tangmarg by Union Vehicle @ INR-2500/- (Private based up to 08 Persons)",
          "Zero Point Sightseeing at Sonmarg by Union Vehicle @ INR-4500/- (Private basis & up to 08 Persons)",
          "Chain Vehicle From Gagangir to Sonmarg Vice Versa by Union Vehicle @ INR-3000/- (Private basis & up to 08 Persons)",
          "During Winter At the time of Heavy snowfally 4*4 jeep required to reach gulmarg from tanmarg , Supplement Cost @ 3000/- Private Cab.",
        ],
        itinerary: [
          {
            "title": "DAY 1: Arrival Srinagar Airport & Local Sightseeing of Srinagar",
            "description": "Pick up from Srinagar airport transfer to houseboat, Dal-Lake. After refresh visit Mughal Gardens, as Nishat Bagh, Shalimar Bagh, Cheshmashahi Garden, Parimahal Garden and Shankaracharya Temple. Then you can enjoy one hour shikara ride at Dal-Lake, Dinner & Overnight stay at Houseboat."
          },
          {
            "title": "DAY 2: Gulmarg Day Excursion",
            "description": "After breakfast drive to Gulmarg, (56 kms from Srinagar one way). Gulmarg has one of the best ski slopes in the world and highest golf course with 18 holes. You can visit Famous Sightseeing of Gulmarg as Aparwath by Asia's largest cable car (Direct/Supplement Cost) by evening back to Srinagar hotel for Dinner and Overnight stay."
          },
          {
            "title": "DAY 3: Pahalgam Day Excursion",
            "description": "After breakfast drive to Pahalgam, En-route visiting the saffron fields, Awantipuram Ruins, Apple Tree Garden, Bein Garden and Sun Murtand Temple. You can visit famous Sightseeing of Pahalgam as Aru Valley, Betaab Valley and Chandanwari by Taxi Union Vehicle (Direct/Supplement Cost). By evening back to Srinagar hotel for Dinner and overnight stay."
          },
          {
            "title": "Day 04: Sonmarg Day Excursion",
            "description": "After breakfast drive to Sonmarg, Sonmarg is also the base for some interesting treks to the high altitude Himalayan Lakes. You can visit Famous Sightseeing of Sonmarg as Thajwas Glacier by Pony/Horse ride (Direct/Supplement Cost). By evening back to Srinagar hotel for Dinner and overnight stay."
          },
          {
            "title": "Day 05: Local City Tour & Srinagar Airport Drop",
            "description": "After Breakfast, Personal activities like shopping/ local city tour which include Jamia Masjid, Hazratbal Shrine, Badamwari and Hariparbat Fort (If time permits) then Drop at Srinagar airport two hours prior to departure of the flight."
          }
        ],
        overview: {
          columns: [
            'Category',
            'Per Person (Min 2 Pax)',
            'Per Person (Min 4 Pax)',
            'Per Person (Min 6 Pax)',
            'Per Person (Min 6 Pax with Tempo)',
            'Per Person (Min 8 Pax)',
            'Per Person (Min 10 Pax)',
            'Extra Bed',
          ],
          data: [
            ["Deluxe", "14,650", "12,588", "11,442", "12,980", "11,969", "11,405", "7,000"],
            ["Super Deluxe", "17,400", "15,338", "14,192", "15,658", "14,719", "14,155", "8,700"],
            ["Superior", "22,075", "20,013", "18,867", "20,333", "19,394", "18,830", "11,000"],
            ["Premium", "30,075", "31,013", "19,867", "31,333", "30,394", "29,830", "15,500"],
            ["Luxury", "35,550", "33,488", "32,432", "33,808", "32,869", "32,305", "21,500"],
          ],
        },
        hotel: {
          columns: [
            "Category",
            "Srinagar 3 nights",
            "srinagar 1 night",
          ],
          data: [
            ["Deluxe", "Mehtab Palace / Grand Zamin", "Deluxe Houseboat at Dallake // Nageen Lake"],
            ["Super Deluxe", "Saty Villa / Asian Park / Similar", "New Alzira | Yound Morning star | Peer Palace, Dal-lake"],
            ["Superior", "Solar Residency / Grand Kaisar / Similar", "Prince of Vale, Dal-Lake | Wangnoo Sheraton, Nigeen Lake"],
            ["Premium", "The Kabo (Deluxe ) / Similar", "The Jewel in Crown"],
            ["Luxury", "The Vintage / Similar", "The Jewel in Crown"],
          ]
        }
      },
      {
        id: 3,
        title: "Kerala",
        type: "Domestic",
        sid: "kerala",
        package: 'educational tour',
        date: "25-28 Sept 2024",
        country: "Japan",
        price: "1,20,000",
        image: "/img/kerala.png",
        icons: [
          { icon: 'bi-globe', image: "img/travel/flight.svg", name: 'flight' },
          { icon: 'bi-globe', image: "img/travel/visa.svg", name: 'visa' },
          { icon: 'bi-globe', image: "img/travel/hotel.svg", name: 'hotel' },
          { icon: 'bi-globe', image: "img/travel/meal.svg", name: 'meal' },
          { icon: 'bi-globe', image: "img/travel/sight.svg", name: 'Sight' },
        ],
        gallery: [
          "/img/dubaicenter/4.png",
          "/img/dubaicenter/5.png",
          "/img/dubaicenter/6.png",
        ],
        description: "Kerala, a state on India's tropical Malabar Coast, has nearly 600km of Arabian Sea shoreline. It's known for its palm-lined beaches and backwaters, a network of canals. Inland are the Western Ghats, mountains whose slopes support tea, coffee and spice plantations as well as wildlife. National parks like Eravikulam and Periyar, plus Wayanad and other sanctuaries, are home to elephants, langur monkeys and tigers.",
        inclusions: [
          "1Nights Accommodation in Cochin",
          "2 Nights Accommodation in Munnar",
          "1 Night Accommodation in Thekkady",
          "1 Night Accommodation in Alleppey",
          "Welcome Drink on Arrival",
          "Daily Breakfast",
          "Pick up & Drop Ex - Cochin",
          "All transfers & Sightseeing by A/c Pvt Vehicle",
          "All toll tax, parking charges, driver charges, fuel cost inclusive",
          "All Taxes Include",
        ],
        itinerary: [
          {
            "title": "Day. 1",
            "description": "Cochin, the confluence point of the alluring Arabian Sea and the silent Backwater, will be your host for the day. With your arrival in this pictorial-perfect city, you will be escorted to a hotel where you can unwind, relax and get refreshed up. Later visit Folklore Museum, Jew Town, Jewish Synagogues and Chinese Fishing Nets, Santa Cruz Basilica, Fort Kochi Beach, Chinese Fishing Nets, Marine Drive, Lulu Mall, Cochin Shopping. Overnight stay at Cochin hotel."
          },
          {
            "title": "Day. 2",
            "description": "After breakfast, Check out from Kochi & Later we proceed towards the hill station of Munnar. Proceed the hilly ghat winding roads, flanked by captivating hills and mountains, you will be greeted with never-ending tea plantations, Munnar is also known as the 'Nature Lover's Paradise' and will surely hold your captive throughout your stay. On the way also visit Cheeyappara Waterfalls and Valara Waterfalls. Arriving in this hilly retreat, you will be checked-in to a hotel to resort. Overnight stay at Munnar hotel/resort."
          },
          {
            "title": "Day. 3",
            "description": "Brace the playful morning light and wake up to a beautiful morning at the hotel/resort. Get freshened up and enjoy a hearty breakfast. Post this, you will be escorted for a full day Sightseeing in Munnar. Proceed & explore the important places in Munnar. Start the tour with Echo Point, Kundale Lake, Kundale Dam, Mattupetty Dam, Indo Swiss and High Range Farms, Munnar Tea Museum, Tea Making Factory, Munnar Tea Plantations (Ride on cost), Rajamalai (Eravikulam) National Park entry with Park Jeep tickets (payable at park), where you can enjoy spotting the exotic Nilgiri Thar. Overnight stay will be in Munnar hotel."
          },
          {
            "title": "Day. 4",
            "description": "Today morning, following your breakfast at the Munnar hotel/resort, pack your bags and check-out from the hotel/resort. Thereafter, you will be driven towards the gorgeous Thekkady, located near to Periyar National Park border. Following your arrival in the town, settle down in hotel/resort and relax for a while. Post this, embark on a rustic tour to the Periyar National Park, a protected reserve forest, where you can spot a variety of flora and fauna. It is bound to wake up your adrenaline and give pleasure to the nature lover in you. The sanctuary is famous for its green lush cover, semi-evergreen, moist deciduous forests and savanna grass lands. This is home to herds of elephants, sambar, tigers, lion-tailed macaques, Nilgiri langur. Head to the Periyar National Park the Periyar Lake, one of the largest artificial lakes in India. Take a boat ride here to truly capture the beauty of the place. Continue back from the tour ride, you can go for local shopping & visit spice plantations. Also, see Kathakali Show, Kalaripayyattu Show, (if time permits, at own cost) Overnight stay in Thekkady hotel/resort."
          },
          {
            "title": "Day. 5",
            "description": "After Breakfast, Checkout from the hotel and proceed to Alleppey which has an immense natural beauty, also known as the 'Venice of the East'. It is famous for the backwaters, its canals, bridges, beaches, marine drive and coconut groves. After arriving in Alleppey, check into your hotel/houseboat and enjoy the cruise through the backwaters of Alleppey. Overnight stay at the hotel / houseboat."
          },
          {
            "title": "Day. 6",
            "description": "After breakfast proceed to Cochin airport / railway station and depart. Travel back to your home with wonderful memories of amazing experience in Kerala."
          }
        ],
        overview: {
          columns: [
            'Category',
            'Per Person (Min 2 Pax)',
            'Per Person (Min 4 Pax)',
            'Per Person (Min 6 Pax)',
            'Extra Adult',
            'child without bed',
            'Supplement Cost Per Person For  the Dates 30th Oct-10th Nov & 20th Dec – 05th Jan 2025',
            'Dinner Cost Per Person',
          ],
          data: [
            ["Standard", "15,536", "13,128", "11,969", "7,000", "5,000", "INR1950 Per Person for 30th Oct – 10th Nov & INR 2400 Per Person for 20th Dec– 05th Jan 2025", "4,500"],
            ["Deluxe", "18,211", "15,803", "14,644", "8,300", "5,400", " INR 2350 Per Person for 30th Oct – 10th Nov & INR 2900 Per Person for 20th Dec– 05th Jan 2025", "4,700"],
            ["Super Deluxe", "19,869", "17,462", "16,302", "9,020", "5,700", "INR 2500 Per Person for 30th Oct – 10th Nov & INR 3325 Per Person for 20th Dec– 05th Jan 20", "5,250"],
            ["Superior", "23,133", "20,725", "19,566", "10,000", "7,200", " INR 2700 Per Person for 30th Oct – 10th Nov & INR 3950 Per Person for 20th Dec– 05th Jan 2025", "5,750"],
          ],
        },
        hotel: {
          columns: [
            "Category",
            "Kochi",
            "Munnar",
            "Thekkady",
            "Alleppey",
          ],
          data: [
            ["Standard", "Millennium Continental ( Standard A/c ) ", "Mist Inn Resort ( Valley View Balcony ) // Green Cove ( Premium Balcony ) // Green Mansion ( Valley View Balcony ) // The Breeze Resort ( Deluxe balcony )", "The Patio ( Deluxe ) // Aura Thekkady (Deluxe ) // Livinns Thekkady ( Deluxe )", "Pagoda Resort ( Deluxe ) // Arcadia Resort ( Deluxe ) "],
            ["Deluxe", "Diana Height ( Deluxe ) // Broad bean (Deluxe ) ", "Aurum Munnar (Deluxe ) // Arbour Munnar ( Club ) // Peter Mount (Executive ) // Blossom Hill (Valley View Balcony )", " Periyar Mountain Palace ( Executive Balcony ) // Jungle Park ( Venus)", "Lakeway Resort ( Premium cottage ) // Venice Iva Residency (Deluxe )"],
            ["Super Deluxe", " Grand Hotel ( Executive )// Jvk Park (Premium) ", "Cloud Castle (Premium ) // Munnar Queen ( Executive ) // Boulevard Resort( Iris ) ", "Periyar Mountain Palace ( Executive Balcony ) // Jungle Park ( Venus)", " Haveli Backwater Resort ( Royal Grand ) "],
            ["Superior", " Grand Hotel ( Executive ) // Jvk Park ( Premium ", "Wolkenburg Resort & Spa ( Silver valley ) // Trivers Munnar ( Attic Suites )", "Casabella Resort ( Premium Cottage ) // Spice Lap (Heritage Deluxe ) ", "Deshadan Backwater Resort ( Lake View ) // Paloma Backwater Resort ( Lake View ) "],
          ]
        },
        extraDetails: {
          note: [
            "At Munnar and Thekadey ac rooms will not provided due to Low temperature.",
            " At hotel check inn time is 14:00 hrs and check out time is 12;00 noon.",
            "At houseboat check inn time is 12:00 hrs and check out time is 9:00 AM.",
            "Early check inn and late check out from hotel and houseboat is subject to rooms availability.",
            "In A / C Deluxe houseboat ac will operational timing is 9: PM – 6: AM",
            " All houseboats will be remain standdtill from 5: 30 PM – 8: AM due to Govt restrictions."
          ],
          tableHeading: "Houseboat Supplement Cost Per Person : Rates Valid till 30th March 2025",
          columns: [
            'Category',
            'Houseboat type ',
            '2 Pax',
            '4 Pax',
            '6 Pax',
            'Extra bed',
            'child without bed',
          ],
          data: [
            ["Standard", "Deluxe", "4,200", "2,600", "2,316", "1,100", "800"],
            ["Deluxe", "Deluxe", "4,000", "2,375", "2,000", "1,100", "800"],
            ["Super Deluxe", "Deluxe", "3,100", "1,100", "900", "1,100", "800"],
            ["Superior", "Premium", "4,000", "1,600", "1,100", "1,600", "1,000"]
          ],
          miscellaneousHeading: "Houseboat rates Increase for below Dates",
          miscellaneous: [
            "Pooja Holidays hike Oct 10 to 20 Oct 30%",
            "Deepavali hike Oct 31 to 10 Nov 25%",
            "Dec 14 to 23 Dec 20% hike",
            "Dec 24 to 2 Jan One Bedroom Deluxe Rs 12500, Premium Rs 17500, Luxury Rs 20000, Ultra Luxury Rs 25000",
            "In One Room only one extra Bed is possible due to the space"
          ],
          termsHeading: "Terms & Conditions",
          terms: [
            "Above rates are net and non-commissionable.",
            "The package cost does not include air / rail fares, airport tax, entry fees to monuments, guide fees, visa charges, personal expenses like telephone calls, laundry, soft / hard drinks, meals, tips and camera fees"
          ]
        }
      },
      {
        id: 4,
        title: "Andaman and Nicobar Islands",
        type: "Domestic",
        sid: "andaman-and-nicobar-islands",
        package: 'honeymoon tour',
        date: "8-10 Oct 2024",
        country: "France",
        price: "1,13,000",
        image: "/img/andaman.png",
        icons: [
          { icon: 'bi-globe', image: "img/travel/flight.svg", name: 'flight' },
          { icon: 'bi-globe', image: "img/travel/visa.svg", name: 'visa' },
          { icon: 'bi-globe', image: "img/travel/hotel.svg", name: 'hotel' },
          { icon: 'bi-globe', image: "img/travel/meal.svg", name: 'meal' },
          { icon: 'bi-globe', image: "img/travel/sight.svg", name: 'Sight' },
        ],
        gallery: [
          "/img/dubaicenter/1.png",
          "/img/dubaicenter/5.png",
          "/img/dubaicenter/6.png",
        ],
        description: "The Andaman and Nicobar Islands is a union territory of India comprising 572 islands, of which only 38 are inhabited. The islands are grouped into two main clusters: the northern Andaman Islands and the southern Nicobar Islands, separated by a 150 km wide channel.",
        overview: {
          title: "Below Rates are Per Person – Net & Non Commissionable",
          subtitle: " Rates valid from 15th Sep 2024 – 10th Dec & From 16th Jan 31st March 2025",
          columns: [
            'Category',
            'Per Person (Min 2 Pax)',
            'Per Person (Min 4 Pax)',
            'Per Person (Min 6 Pax)',
            'Extra Adult',
            '5-12 year without bed ',
            '1-3 year',
            'Dinner Charges',
          ],
          data: [
            ["Deluxe", "22,889", "20,249", "19,369", "16,069", "13,209", "6,620", "5,025"],
            ["Deluxe Plus", "25,859", "23,219", "22,449", "16,069", "13,209", "6,620", "5,245"],
            ["Super Deluxe", "27,619", "24,979", "24,099", "17,389", "15,519", "6,620", "6,895"],
            ["Super Deluxe Plus", "29,929", "27,399", "26,519", "19,259", "16,389", "6,620", "7,335"],
            ["Superior", "35,209", "32,569", "31,799", "20,359", "17,499", "6,620", "7,335"],
          ],
        },
        hotel: {
          columns: [
            "HOTEL Category",
            "PortBlair",
            "Havelock",
            "NeilIsland",
          ],
          data: [
            ["Deluxe", "J Hotel ( Deluxe ) // Driftwood (Deluxe ) // Haywizz( Deluxe )", " Nk Eco Resort (Deluxe ) // Radhakrishna Resort ( Deluxe ) // Blue Bird Resort ( Deluxe )", " Neil Banjara (Deluxe ) // Lakshmi Continental ( Deluxe ) // Save Green ( Deluxe )"],
            ["Deluxe Plus", " The Mainak H & r ( Premium ) // Star Paradise ( Deluxe ) // Sr Castle ( Deluxe )", " Havelock Exotic ( Deluxe ) // Ile Bay Resort (Deluxe ) // White Coral ( Cottage )", "NK Eco Resort ( Deluxe ) // Coral Garden ( deluxe )"],
            ["Super Deluxe", " Tsg Emerald ( Deluxe ) // Tsg Grand ( Deluxe ) // The Mainak H & R ( Executive )", " Tsg Blue ( Pool View ) // Haywizz ( Pool View ) // Holiday & Holiday Beach ( Studio )", "Aquays Resort ( Neil Plaza ) // Tsg Aura ( Sea Side Balcony )"],
            ["Super Deluxe Plus", "The Mainak H & R ( Sea View ) // Mansha Regency ( Deluxe ) // Mansha Palace ( Deluxe )", " Aquay Resort ( Plaza ) // Sands Marina (Executive ) // Sea Hills (Bamboosaa )", " Aquays Resort ( Neil Plaza ) // Tsg Aura ( Sea Side Balcony )"],
            ["Superior", " Lemon Tree (Superior ) // coral cove ( Executive )// Sea Hills (Deluxe Pre)", " Symphony Palms ( Garden ) // Aquay Resort ( Lagoon ) // Ocean Tree (Villa )", "Summer Sand ( Casa Air ) // Aquays Resort ( Vista ) "],
          ]
        },
        itinerary: [
          {
            "title": "Day 01: Port Blair - Corbyn’s Cove Beach– Cellular Jail – Light & Sound Show",
            "description": " Assistance on arrival at Veer Savarkar Airport, Port Blair and You will be taken to your hotel where you rest and relax. Then you proceed to Corbyn’s Cove Beach – one of the most picturesque, sandy, coconut-palm fringed beaches, seven kms away from Port Blair town is ideal for swimming and sun-basking.After that you visit the Cellular Jail, formerly known as Kala Pani, it was a colonial prison used by the British to deport political prisoners to this remote location. Later you attend the enthralling Light and Sound Show at Cellular Jail – where the heroic saga of the Indian freedom struggle is brought alive. Post completion of this trip, we drop you back at your hotel. Stay Overnight in Port Blair. Note: We will drop the guest at the parking area near Cellular Jail and from there the guest has to walk around 200 meter and return to the parking area after visiting the Jail and Light & Sound Show"
          },
          {
            "title": "Day 02: Port Blair - Havelock Island Radhanagar Beach Trip",
            "description": "As per the ferry schedule, board the ferry from Port Blair jetty and get transferred to Swaraj Dweep (Havelock Island). Havelock Island is famous for its entrancing white sandy beaches among the most beautiful beaches in Andaman. On reaching, get transferred to the hotels to complete the check-in. Enjoy your afternoon at the World Famous Radha Nagar Beach (Beach number 7) ‘Best Beach in Asia’. You will realize the reason for the same just in a few minutes after visiting this beach.Then you will be transferred to the hotel. Stay overnight in Havelock. Note: Ferry will be issued as per the availability of tickets. Sightseeing will be covered as per ferry timings."
          },
          {
            "title": "Day 03: Havelock Island - Elephanta Beach",
            "description": " After breakfast, start the journey to one of the most popular destinations in Havelock Island, due to its serenity and clear water, Elephanta Beach (Complementary Snorkeling by Boat association). Then you will be transferred to the hotel. Stay overnight in Havelock"
          },
          {
            "title": "Day 04: Havelock Island – Neil Island Bharatpur Beach Laxmanpur Beach",
            "description": " Post breakfast check out from the hotel and as per the schedule board a ferry from Havelock Island and get transferred to Shaheed Dweep (Neil Island) – of unexplored coral reefs, brilliant biodiversity, white sandy beaches with tropical forest. On arrival at Neil Island, our representative will receive and escort you to check-in to the hotel. Then you visit Bharatpur Beach, ideal for Snorkeling and glass bottom boat rides (for Extra cost).Later in the afternoon visit Laxmanpur Beach for magnificent sunset viewing. Evening is free or on your own. Stay overnight in Neil Island. Note: Ferry will be issued as per the availability of tickets. Sightseeing will be covered as per ferry timings"
          },
          {
            "title": "Day 05: Neil Island Howrah Bridge – Port Blair",
            "description": " Post breakfast check out from the hotel and visit Howrah Bridge, a natural rock formation. Here you can see the beautiful coral and underwater life. Then as per the schedule we drop you at Neil Jetty to board the ferry to Port Blair. Our representative will pick you up at Port Blair Jetty and drop you to the hotel. Stay overnight in Port Blair. Note: Ferry will be issued as per the availability of tickets. Sightseeing will be covered as per ferry timings."
          },
          {
            "title": "Day 05: Drop To Airport",
            "description": " After breakfast check out from the hotel and proceed to the airport to return home with  sweet memories of this exotic destination. Standard Check in time: 12 PM Standard Check out time: 9 AM Note: Early check-in and late check-out is subject to availability of rooms"
          },
        ],
        inclusions: [
          "2 Nights Accommodation in Port Blair",
          "2 Nights Accommodation in Havelock",
          "1 Nights Accommodation in Neil Island",
          "Airport , Jetty & Hotel Transfers and Sightseeing as per the above-itinerary by AC Vehicle and not at disposal (01 vehicle)",
          "Daily Breakfast",
          "All kind of transport and luxury Taxes.",
          "Assistance at all arrival and departure points.",
          "All side Private Cruise charges Included – Port Blair – Neil – Havelock –Port blair.",
          "Port Blair – Havelock – Neil Island (MAK//Sea Link//Green Ocean//Aashi)",
          "Entry permits/Entry tickets/Boat tickets/Ferry tickets wherever required",
          "All Sightseeing & Transfer as per Itinerary",
          "Parking Charges.",
        ],
        exclusions: [
          " Any Airfare, Train fare, Overland Journey which is not mentioned in the Itinerary.",
          "Any Gala Dinner Charges on Xmas or New year Eve",
          " Any Medical/rescue evacuation due to mishaps.",
          " Any personal nature items like Laundry, bar bills, table bills, camera fee, tips or any other item",
          "Vehicle not at disposal at any of the islands.",
          "Any extra excursion or sightseeing apart from suggested tour itinerary",
          "Cost incidental to any change in the itinerary/ stay on account of flight cancellation due to bad weather, ill health, roadblocks and/or any factors beyond control ",
        ],
        extraDetails: {
          miscellaneousHeading: "Supplement Water Sports Activities (if pre-booked)",
          miscellaneous: [
            " Scuba Diving : Rs.4500/- per head with photo, video and dive certificate.",
            "Sea Walk : Rs.4500/- per head with photo",
            "Snorkeling : Rs.1200/- per head",
            "Andaman Dolphin : Rs.2350/- per head",
            "Semi Submarine Coral Safari : Rs.2400/- per head",
            "Glass Bottom Ride: Rs.600/- per head",
            "Jet Ski : Rs.600/- per head",
            "Banana Ride / Sofa Ride / Speed Boat : Rs.600/- per head "
          ],
          termsHeading: "General Conditions & Remarks",
          terms: [
            "Offered rates are Net and non-commissionable.",
            " Confirmation will be subject to availability @ the time of reservation",
            "Rates may change if traveling dates are changed.",
            "We shall proceed with the holding/ confirmation and we would require 25% payment, 50% before 30 Days and balance before 10 Days of travel date",
            "Tour program may be shuffled due to the inclement weather conditions and changes in Flight/ Ferry operations, which may incur extra charges.",
            " In the case of cancellation of a trip, we shall process a refund as per policy of Hotel / Services, efforts deserve a service charge of 10 % of total cost of the package.",
            "The vehicle used will be exclusive for guests but will not be at disposal.It will as per contract & will change every day and sector wise.",
            "Mostly hotels in Andamans follow an early Check in/ Check Out time (07:30am 08: 30am) policy, early check in/ Late Check Out subject to availability and completely on hotel’s discretion.",
            "All extras other than mentioned above are payable directly at hotel / service provider.",
            "We do not provide standalone services such as only Hotels OR only transport OR any other service, do not insist us for price breakup."
          ]
        }
      },
      {
        id: 5,
        title: "Dubai",
        type: "International",
        sid: "dubai",
        package: 'visa services',
        date: "12-15 Oct 2024",
        country: "Germany",
        price: "1,00,000",
        image: "/img/dubai.png",
        icons: [
          { icon: 'bi-globe', image: "img/travel/flight.svg", name: 'flight' },
          { icon: 'bi-globe', image: "img/travel/visa.svg", name: 'visa' },
          { icon: 'bi-globe', image: "img/travel/hotel.svg", name: 'hotel' },
          { icon: 'bi-globe', image: "img/travel/meal.svg", name: 'meal' },
          { icon: 'bi-globe', image: "img/travel/sight.svg", name: 'Sight' },
        ],
        gallery: [
          "/img/dubai/1.png",
          "/img/dubai/2.png",
          "/img/dubai/3.png",
          "/img/dubai/4.png",
          "/img/dubai/5.png",
          "/img/dubai/6.png",
        ],
        description: "Dubai is a city and emirate in the United Arab Emirates known for luxury shopping, ultramodern architecture and a lively nightlife scene. Burj Khalifa, an 830m-tall tower, dominates the skyscraper-filled skyline. At its foot lies Dubai Fountain, with jets and lights choreographed to music. On artificial islands just offshore is Atlantis, The Palm, a resort with water and marine-animal parks.",
        inclusions: [
          " Nights accomodation in 5 / 4 hotel",
          "Daily breakfast in hotel",
          "Daily dinner in hotel",
          "Airport - hotel - Airport Transfers",
          "Daily Hotel - Fair ground - Hotel transfers",
          "Dubai Visa charges",
          "Overseas Medical Insurance",
          "Experienced tour escort from the Company",
          "All Taxes and GST except hotel UAE government charges which you have to pay directly to the hotel",
        ],
        itinerary: [
          {
            "title": "Day 01",
            "description": " Depart from Delhi/Mumbai Arrive Dubai Transfer & Check-in to Hotel Dinner at hotel, Overnight at Hotel"
          },
          {
            "title": "Day 02",
            "description": "Breakfast at Hotel and then mend your Stall"
          },
          {
            "title": "Day 03",
            "description": "Breakfast at Hotel Attend GULFOOD 2025 Dinner at Hotel"
          },
          {
            "title": "Day 04",
            "description": "Breakfast at Hotel Attend GULFOOD Dinner at Hotel"
          },
          {
            "title": "Day 05",
            "description": "Breakfast at Hotel Attend GULFOOD Dinner at Hotel"
          },
          {
            "title": "Day 06",
            "description": "Breakfast at Hotel Attend GULFOOD Dinner at Hotel"
          },
          {
            "title": "Day 07",
            "description": "Breakfast at Hotel Attend GULFOOD Dinner at Hotel"
          },
          {
            "title": "Day 08",
            "description": "Breakfast at Hotel Check-out from Hotel Transfer to Airport Depart for India"
          },
        ]
      },
      {
        id: 6,
        title: "Dubai World Trade Centre",
        type: "International",
        sid: "dubai-world-trade-center",
        package: 'other services',
        date: "14-18 Oct 2024",
        country: "USA",
        price: "1,06,000",
        image: "/img/dubaiWorld.png",
        icons: [
          { icon: 'bi-globe', image: "img/travel/flight.svg", name: 'flight' },
          { icon: 'bi-globe', image: "img/travel/visa.svg", name: 'visa' },
          { icon: 'bi-globe', image: "img/travel/hotel.svg", name: 'hotel' },
          { icon: 'bi-globe', image: "img/travel/meal.svg", name: 'meal' },
          { icon: 'bi-globe', image: "img/travel/sight.svg", name: 'Sight' },
        ],
        gallery: [
          "/img/dubaicenter/1.png",
          "/img/dubaicenter/2.png",
          "/img/dubaicenter/3.png",
          "/img/dubaicenter/4.png",
          "/img/dubaicenter/5.png",
          "/img/dubaicenter/6.png",
        ],
        description: "Dubai is a city and emirate in the United Arab Emirates known for luxury shopping, ultramodern architecture and a lively nightlife scene. Burj Khalifa, an 830m-tall tower, dominates the skyscraper-filled skyline. At its foot lies Dubai Fountain, with jets and lights choreographed to music. On artificial islands just offshore is Atlantis, The Palm, a resort with water and marine-animal parks.",
        inclusions: [
          "Return Air Fare on economy class (Ex Delhi)",
          "05 Nights’ accommodation in 4* Grand Excelsior Hotel- Bur Dubai",
          "Daily Breakfast in Hotel",
          "Daily Indian Dinner in Hotel only",
          "Airport - Hotel - Airport transfers by A.C.Coach",
          "Overseas Medi - claim insurance",
          "Visa fees included",
          "An experienced tour escort from the company",
          "All service charges and 18 % Taxes & GST For Ex.Ahmedabad, Chennai & Bangalore, prices are available on request.The package can be Customized."
        ],
        itinerary: [
          {
            "title": "Day 01: 26 JAN",
            "description": "Depart from Delhi/Mumbai Arrive Dubai Transfer & Check-in to Hotel Dinner in hotel Overnight at Hotel "
          },
          {
            "title": "Day 02: 27 JAN",
            "description": "Breakfast at Hotel Attend ARAB HEALTH 2025 Dinner at hotel Overnight at Hotel"
          },
          {
            "title": "Day 03: 28 JAN",
            "description": "Breakfast at Hotel Attend ARAB HEALTH 2025 Dinner at Hotel"
          },
          {
            "title": "Day 04: 29 JAN",
            "description": " Breakfast at Hotel Attend ARAB HEALTH Dinner at Hotel"
          },
          {
            "title": "Day 05: 30 JAN",
            "description": "Breakfast at Hotel Attend ARAB HEALTH at Hotel"
          },
          {
            "title": "Day 06: 31 JAN",
            "description": "Breakfast at Hotel Check-out from Hotel Transfer to Airport Depart for India "
          },
        ]
      },
      {
        id: 7,
        title: "International Denatal-Schau Visitor Pack",
        type: "International",
        sid: "international-denatal-schau-visitor-pack",
        package: 'domestic tour',
        date: "15-19 23-27 Oct 2024",
        price: "1,15,000",
        country: "India",
        image: "/img/ids.png",
        icons: [
          { icon: 'bi-globe', image: "img/travel/flight.svg", name: 'flight' },
          { icon: 'bi-globe', image: "img/travel/visa.svg", name: 'visa' },
          { icon: 'bi-globe', image: "img/travel/hotel.svg", name: 'hotel' },
          { icon: 'bi-globe', image: "img/travel/meal.svg", name: 'meal' },
          { icon: 'bi-globe', image: "img/travel/sight.svg", name: 'Sight' },
        ],
        gallery: [
          "/img/idsvisitor/1.png",
          "/img/idsvisitor/2.png",
          "/img/idsvisitor/3.png",
          "/img/idsvisitor/4.png",
          "/img/idsvisitor/5.png",
          "/img/idsvisitor/6.png",
        ],
        description: "",
        inclusions: [
          "Return Airfare on economy class on Luftansa Airlines Ex. Delhi and Mumbai.",
          "6 Nights accomodation in 4 Star hotel (12 minutes drive to Messe Cologne).",
          "Daily breakfast in hotel.",
          "Daily dinner in Indian restaurant",
          "Airport - hotel - Airport Transfers",
          "Daily Hotel - Fair ground - Hotel transfers.",
          "Visa services. (taking appointment and all documentation part).",
          "Overseas Medical Insurance.",
          "Experienced tour escort from the company.",
          "All Taxes and GST included."
        ],
        itinerary: [
          {
            "title": "Day 01",
            "description": "Depart from Delhi/Mumbai Arrive Cologne Transfer & Check-in to Hotel Dinner at Indian restaurant, Overnight at Hotel"
          },
          {
            "title": "Day 02",
            "description": "Breakfast at Hotel Attend IDS 2025 Dinner at Indian Restaurant"
          },
          {
            "title": "Day 03",
            "description": " Breakfast at Hotel Attend IDS 2025 Dinner at Indian Restaurant"
          },
          {
            "title": "Day 04",
            "description": " Breakfast at Hotel Attend IDS 2025 Dinner at Indian Restaurant"
          },
          {
            "title": "Day 05",
            "description": "Breakfast at Hotel Attend IDS 2025 Dinner at Indian Restaurant"
          },
          {
            "title": "Day 06",
            "description": "Breakfast at Hotel Attend IDS 2025 Dinner at Indian Restaurant"
          },
          {
            "title": "Day 07",
            "description": " Breakfast at Hotel Check-out from Hotel Transfer to Airport Depart for India"
          },
        ]
      },
      {
        id: 8,
        title: "International Denatal-Schau Package",
        type: "International",
        sid: "international-denatal-schau-package",
        package: 'international tour',
        date: "16-19 Oct 2024",
        price: "1,07,000",
        country: "Germany",
        image: "/img/ids.png",
        icons: [
          { icon: 'bi-globe', image: "img/travel/flight.svg", name: 'flight' },
          { icon: 'bi-globe', image: "img/travel/visa.svg", name: 'visa' },
          { icon: 'bi-globe', image: "img/travel/hotel.svg", name: 'hotel' },
          { icon: 'bi-globe', image: "img/travel/meal.svg", name: 'meal' },
          { icon: 'bi-globe', image: "img/travel/sight.svg", name: 'Sight' },
        ],
        gallery: [
          "/img/idspackage/1.png",
          "/img/idspackage/2.png",
          "/img/idspackage/3.png",
          "/img/idspackage/4.png",
          "/img/idspackage/5.png",
          "/img/idspackage/6.png",
        ],
        description: "",
        inclusions: [
          "Return Airfare on economy class on Luftansa Airlines Ex. Delhi and Mumbai.",
          "7 Nights accomodation in 4 Star hotel (12 minutes drive to Messe Cologne).",
          "Daily breakfast in hotel.",
          "Daily dinner in Indian restaurant",
          "Airport - hotel - Airport Transfers",
          "Daily Hotel - Fair ground - ground-Hotel transfers.",
          "Visa services. (taking appointment and all documentation part).",
          "Overseas Medical Insurance.",
          "Experienced tour escort from the company.",
          "All Taxes and GST included."
        ],
        itinerary: [
          {
            "title": "Day 01",
            "description": "Depart from Delhi/Mumbai Arrive Cologne Transfer & Check-in to Hotel Dinner at Indian restaurant, Overnight at Hotel"
          },
          {
            "title": "Day 02",
            "description": "Breakfast at Hotel and then mend your Stall"
          },
          {
            "title": "Day 03",
            "description": "Breakfast at Hotel Attend IDS 2025 Dinner at Indian Restaurant"
          },
          {
            "title": "Day 04",
            "description": " Breakfast at Hotel Attend IDS 2025 Dinner at Indian Restaurant"
          },
          {
            "title": "Day 05",
            "description": "Breakfast at Hotel Attend IDS 2025 Dinner at Indian Restaurant"
          },
          {
            "title": "Day 06",
            "description": " Breakfast at Hotel Attend IDS 2025 Dinner at Indian Restaurant"
          },
          {
            "title": "Day 07",
            "description": "Breakfast at Hotel Attend IDS 2025 Dinner at Indian Restaurant"
          },
          {
            "title": "Day 08",
            "description": "Breakfast at Hotel Check-out from Hotel Transfer to Airport Depart for India"
          },
        ]
      },
      {
        id: 9,
        title: "VIETNAM",
        type: "International",
        sid: "vietanam",
        package: 'trade fair',
        date: "22-24 Oct 2024",
        price: "1,06,000",
        country: "USA",
        image: "/img/vietanam.png",
        icons: [
          { icon: 'bi-globe', image: "img/travel/flight.svg", name: 'flight' },
          { icon: 'bi-globe', image: "img/travel/visa.svg", name: 'visa' },
          { icon: 'bi-globe', image: "img/travel/hotel.svg", name: 'hotel' },
          { icon: 'bi-globe', image: "img/travel/meal.svg", name: 'meal' },
          { icon: 'bi-globe', image: "img/travel/sight.svg", name: 'Sight' },
        ],
        gallery: [
          "/img/vietnam/1.png",
          "/img/vietnam/2.png",
          "/img/vietnam/3.png",
          "/img/vietnam/4.png",
          "/img/vietnam/5.png",
          "/img/vietnam/6.png",
        ],
        description: "Vietnam is a Southeast Asian country known for its beaches, rivers, Buddhist pagodas and bustling cities. Hanoi, the capital, pays homage to the nation’s iconic Communist-era leader, Ho Chi Minh, via a huge marble mausoleum. Ho Chi Minh City (formerly Saigon) has French colonial landmarks, plus Vietnamese War history museums and the Củ Chi tunnels, used by Viet Cong soldiers.",
        inclusions: [
          "Return Airfare on economy class on Luftansa Airlines Ex. Delhi and Mumbai.",
          "7 Nights accomodation in 4 Star hotel (12 minutes drive to Messe Cologne).",
          "Daily breakfast in hotel.",
          "Daily dinner in Indian restaurant",
          "Airport - hotel - Airport Transfers",
          "Daily Hotel - Fair ground - ground-Hotel transfers.",
          "Visa services. (taking appointment and all documentation part).",
          "Overseas Medical Insurance.",
          "Experienced tour escort from the company.",
          "All Taxes and GST included."
        ],
        itinerary: [
          {
            "title": "Day 01",
            "description": "Depart from Delhi/Mumbai Arrive Cologne Transfer & Check-in to Hotel Dinner at Indian restaurant, Overnight at Hotel"
          },
          {
            "title": "Day 02",
            "description": "Breakfast at Hotel and then mend your Stall"
          },
          {
            "title": "Day 03",
            "description": "Breakfast at Hotel Attend IDS 2025 Dinner at Indian Restaurant"
          },
          {
            "title": "Day 04",
            "description": " Breakfast at Hotel Attend IDS 2025 Dinner at Indian Restaurant"
          },
          {
            "title": "Day 05",
            "description": "Breakfast at Hotel Attend IDS 2025 Dinner at Indian Restaurant"
          },
          {
            "title": "Day 06",
            "description": " Breakfast at Hotel Attend IDS 2025 Dinner at Indian Restaurant"
          },
          {
            "title": "Day 07",
            "description": "Breakfast at Hotel Attend IDS 2025 Dinner at Indian Restaurant"
          },
          {
            "title": "Day 08",
            "description": "Breakfast at Hotel Check-out from Hotel Transfer to Airport Depart for India"
          },
        ]
      },
    ],
    itinerary: [
      {
        name: "Itninerary",
        description: "",
      },
      {
        name: "Facts & Figures",
        description: "",
      },
      {
        name: "Hotel",
        description: "",
      },
      {
        name: "Flight",
        description: "",
      },
      {
        name: "Visa",
        description: "",
      },
      {
        name: "Inclusion",
        description: "",
      },
      {
        name: "Exclusion",
        description: "",
      },
      {
        name: "Term & Conditions",
        description: "",
      },
    ],
  },
  getters: {
    getProducts: state => state.products,
    getTrades: state => state.tradeFairs,
    getItinerary: state => state.itinerary,
    getPackage: state => state.packages,
    getSinglePackage: (state) => (packagesId) => {
      let index = state.packages.findIndex(product => product.sid == packagesId);
      return state.packages[index];
    },
  },
  mutations: {
    createProduct(state, product) {
      state.products.push(product);
    },
    editProduct(state, updatedProduct) {
      const index = state.products.findIndex(product => product.id === updatedProduct.id);
      if (index !== -1) {
        state.products.splice(index, 1, updatedProduct);
      }
    },
  },
  actions: {
    createProduct({ commit }, product) {
      commit('createProduct', product);
    },
    editProduct({ commit }, product) {
      commit('editProduct', product);
    }
  },
  modules: {},
});
