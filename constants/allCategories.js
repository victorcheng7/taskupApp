
const allCategories = {
  Homework: {
    name: 'Homework',
    useCase: 'Ever needed help on an assignment? Ever needed a tutor to speed your learning? Get your essays and math homework done, quick and easy. Homework buddies are here to save your day!',
    tip: 'Get help with some homework',
    subCategories: {
      'Computer Science': {
        name: 'Computer Science',
        icon: 'book',
        professional: true,
        price: {
          number: '25',
          unit: 'hour',
          avg: 'Average: $25/hour',
        },
      },
      Mathematics: {
        name: 'Mathematics',
        icon: 'book',
        professional: true,
        price: {
          number: '25',
          unit: 'hour',
          avg: 'Average: $25/hour',
        },
      },
      Physics: {
        name: 'Physics',
        icon: 'book',
        professional: true,
        price: {
          number: '25',
          unit: 'hour',
          avg: 'Average: $25/hour',
        },
      },
      Biology: {
        name: 'Biology',
        icon: 'book',
        professional: true,
        price: {
          number: '25',
          unit: 'hour',
          avg: 'Average: $25/hour',
        },
      },
      Chemistry: {
        name: 'Chemistry',
        icon: 'book',
        professional: true,
        price: {
          number: '25',
          unit: 'hour',
          avg: 'Average: $25/hour',
        },
      },
      Communication: {
        name: 'Communication',
        icon: 'book',
        professional: true,
        price: {
          number: '25',
          unit: 'hour',
          avg: 'Average: $25/hour',
        },
      },
      History: {
        name: 'History',
        icon: 'book',
        professional: true,
        price: {
          number: '25',
          unit: 'hour',
          avg: 'Average: $25/hour',
        },
      },
      English: {
        name: 'English',
        icon: 'book',
        professional: true,
        price: {
          number: '25',
          unit: 'hour',
          avg: 'Average: $25/hour',
        },
      },
      Economics: {
        name: 'Economics',
        icon: 'book',
        professional: true,
        price: {
          number: '25',
          unit: 'hour',
          avg: 'Average: $25/hour',
        },
      },
      Other: {
        name: 'Other',
        icon: 'book',
        professional: true,
        price: {
          number: '25',
          unit: 'hour',
          avg: 'Average: $25/hour',
        },
      },
    },
  },

  Driving: {
    name: 'Driving',
    useCase: 'Ever needed a ride after a party? Too lazy to go to class? Need to go downtown? Need to do groceries or grab food? These are Gauchos that got your back!',
    tip: 'Get a ride somewhere',
    subCategories: {
      'All around IV': {
        name: 'All around IV',
        icon: 'car',
        professional: false,
        price: {
          number: '5',
          unit: 'ride',
          avg: 'Price: $5 each ride',
        },
      },
      'To Downtown': {
        name: 'To Downtown',
        icon: 'car',
        professional: false,
        price: {
          number: '5',
          unit: 'ride',
          avg: 'Price: $5 each ride',
        },
      },
      'To Costco': {
        name: 'To Costco',
        icon: 'car',
        professional: false,
        price: {
          number: '5',
          unit: 'ride',
          avg: 'Price: $5 each ride',
        },
      },
      'General Requests': {
        name: 'General Requests',
        icon: 'car',
        professional: false,
        price: {
          number: '5',
          unit: 'ride',
          avg: 'Price: $5 each ride',
        },
      },
    },
  },

  Delivery: {
    name: 'Delivery',
    useCase: 'Ever too lazy or too busy to pick up food? Ever forget your laptop charger and need someone to get it for you? Well these fine Gauchos got your back and operate lightning fast. No more waiting an hour for IVMenus to drop off your Hana kitchen bowl.',
    subCategories: {
      'Meal in IV': {
        name: 'Meal in IV',
        icon: 'shopping',
        professional: false,
        price: {
          number: '10',
          unit: 'delivery',
          avg: 'Price: $10 each delivery',
        },
      },
      'Groceries in IV': {
        name: 'Groceries in IV',
        icon: 'shopping',
        professional: false,
        price: {
          number: '10',
          unit: 'delivery',
          avg: 'Price: $10 each delivery',
        },
      },
      'Groceries in Goleta': {
        name: 'Groceries in Goleta',
        icon: 'shopping',
        professional: false,
        price: {
          number: '10',
          unit: 'delivery',
          avg: 'Price: $10 each delivery',
        },
      },
    },
  },

  House: {
    name: 'Rent House',
    useCase: 'Need a place to crash? A place to throw a party? These are Gauchos who have extra space for you. Just one rule - don’t trash the place. Cleanliness is also important, so bring your own sheets please :).',
    subCategories: {
      Party: {
        name: 'Party',
        icon: 'home',
        professional: false,
        price: {
          number: '50',
          unit: 'day',
          avg: 'Price: $50 each day',
        },
      },
      'Need a place to crash': {
        name: 'Need a place to crash',
        icon: 'home',
        professional: false,
        price: {
          number: '10',
          unit: 'night',
          avg: 'Price: $10 each night',
        },
      },
    },
  },

  Cleaning: {
    name: 'Cleaning',
    useCase: 'Got a messy bathroom, a messy room? Ever needed someone to clean your house after a party? Ever need your kitchen tidied up? House cleaners know what’s up. They’ve got the tools and experience to have your house spotless.',
    tip: 'Get something cleaned',
    subCategories: {
      Dishes: {
        name: 'Dishes',
        useCase: 'Your kitchen piled with dishes? Ever too lazy to do the dishes that week? These Gauchos scrub like no other and will have your sink spotless in 30.',
        icon: 'home',
        professional: false,
        price: {
          number: '10',
          unit: 'cleaning',
          avg: 'Price: $10 each cleaning',
        },
      },
      Bedroom: {
        name: 'Bedroom',
        icon: 'home',
        professional: false,
        price: {
          number: '15',
          unit: 'cleaning',
          avg: 'Price: $15 each cleaning',
        },
      },
      Bathroom: {
        name: 'Bathroom',
        icon: 'home',
        professional: false,
        price: {
          number: '15',
          unit: 'cleaning',
          avg: 'Price: $15 each cleaning',
        },
      },
      'Living Room': {
        name: 'Living Room',
        icon: 'home',
        professional: false,
        price: {
          number: '20',
          unit: 'cleaning',
          avg: 'Price: $20 each cleaning',
        },
      },
      'After party': {
        name: 'After party',
        icon: 'home',
        professional: false,
        price: {
          number: '20',
          unit: 'cleaning',
          avg: 'Price: $20 each cleaning',
        },
      },
    },
  },

  Beauty: {
    name: 'Beauty',
    useCase: 'Need to freshen up? What do you need done?',
    tip: 'Transform yourself',
    subCategories: {
      'Cut hair (men)': {
        name: 'Cut hair (men)',
        useCase: 'Ever needed a fresh cut before a date, someone to curl your hair without burning your wallet? These Gauchos know how to make your hair on fleek and have done so for their friends.',
        icon: 'scissor',
        professional: true,
        price: {
          number: '10',
          unit: 'cut',
          avg: 'Average: $10 each cut',
        },
      },
      'Cut hair (ladies)': {
        name: 'Cut hair (ladies)',
        useCase: 'Ever needed a fresh cut before a date, someone to curl your hair without burning your wallet? These Gauchos know how to make your hair on fleek and have done so for their friends.',
        icon: 'scissor',
        professional: true,
        price: {
          number: '15',
          unit: 'cut',
          avg: 'Average: $15 each cut',
        },
      },
      'Curl hair': {
        name: 'Curl hair',
        icon: 'scissor',
        professional: false,
        price: {
          number: '10',
          unit: 'curl',
          avg: 'Price: $10 per curl',
        },
      },
      'Braid hair': {
        name: 'Braid hair',
        icon: 'smile',
        professional: false,
        price: {
          number: '10',
          unit: 'braid',
          avg: 'Price: $10 per braiding',
        },
      },
      'Dye hair': {
        name: 'Dye hair',
        icon: 'smile',
        professional: false,
        price: {
          number: '10',
          unit: 'braid',
          avg: 'Price: $10 per braiding',
        },
      },
      'Thread Eyebrows': {
        name: 'Thread Eyebrows',
        useCase: 'Need your eyebrows threaded? Need to look sharp? These Gauchos have care and precision and know how to make your eyebrows on fleek.',
        icon: 'smile',
        professional: false,
        price: {
          number: '10',
          unit: 'threading',
          avg: 'Price: $10 per threading',
        },
      },
      Makeup: {
        name: 'Makeup',
        useCase: 'Trying to get your makeup done before a party? Trying to transform yourself to stunning beauty before a date? These Gauchos are not just great company, they’re trained to make you look great.',
        icon: 'smile',
        professional: false,
        price: {
          number: '10',
          unit: 'makeup',
          avg: 'Price: $10 per makeup',
        },
      },
      Manicure: {
        name: 'Manicure',
        useCase: 'Salons are too expensive. Meet another Gaucho as they transform your nails to beauty.',
        icon: 'smile',
        professional: false,
        price: {
          number: '10',
          unit: 'manicure',
          avg: 'Price: $10 per manicure',
        },
      },
    },
  },

  Pets: {
    name: 'Pet Care',
    useCase: 'Gauchos love pets! What do you need?',
    tip: 'Take care of your pets',
    subCategories: {
      Petsitting: {
        name: 'Pet sitting',
        icon: 'user',
        professional: false,
        price: {
          number: '10',
          unit: 'hour',
          avg: 'Price: $10 per hour',
        },
      },
      'Dog walking': {
        name: 'Dog walking',
        useCase: 'Too lazy to walk your dog today? Not trying to take care of all the shit your dog leaves behind? Hire a dog walker for a day. Don’t worry, these Gauchos love dogs and they’re down to help you out!',
        icon: 'user',
        professional: false,
        price: {
          number: '10',
          unit: 'hour',
          avg: 'Price: $10 per hour',
        },
      },
    },
  },

  Massage: {
    name: 'Massage',
    useCase: 'Ever needed to relax after a big game, a workout, or just stressed with midterms? These Gauchos are trained to give amazing massages!',
    tip: 'Get a refreshing massage',
    subCategories: {
      'Chair massage': {
        name: 'Chair massage',
        useCase: 'Stressed out? Get a chair massage massage!',
        icon: 'user',
        professional: true,
        price: {
          number: '5',
          unit: 'massage',
          avg: 'Average: $5 per massage',
        },
      },
      '15 minutes massage': {
        name: '15 minutes massage',
        icon: 'user',
        professional: true,
        price: {
          number: '10',
          unit: 'massage',
          avg: 'Average: $10 per massage',
        },
      },
      'Sports massage': {
        name: 'Sports massage',
        icon: 'user',
        professional: true,
        price: {
          number: '10',
          unit: 'massage',
          avg: 'Average: $10 per massage',
        },
      },
      'Swedish massage': {
        name: 'Swedish massage',
        icon: 'user',

        professional: true,
        price: {
          number: '10',
          unit: 'massage',
          avg: 'Average: $10 per massage',
        },
      },
      'Deep tissue massage': {
        name: 'Deep tissue massage',
        icon: 'user',
        professional: true,
        price: {
          number: '15',
          unit: 'massage',
          avg: 'Average: $15 per massage',
        },
      },
    },
  },

  Other: {
    name: 'Other',
    useCase: 'Something else you are looking for?',
    tip: 'Other tasks',
    subCategories: {
      Bouncer: {
        name: 'Bouncer',
        useCase: 'Ever needed someone to check your FB invites at a party? Ever needed more people to stop randos from barging into your house? These fine men and women are ready to be at your service.',
        icon: 'safety-certificate',
        professional: true,
        price: {
          number: '40',
          unit: 'night',
          avg: 'Average: $40 per night',
        },
      },
      Photography: {
        name: 'Photography',
        useCase: 'Ever needed a professional photographer? Take a look at their portfolio, pick who you like, and bring them the next time you go out and about. They’ll leave you with an album of new photos for Insta.',
        icon: 'camera',
        professional: true,
        price: {
          number: '25',
          unit: 'hour',
          avg: 'Average: $25 per hour',
        },
      },
      DJ: {
        name: 'DJ',
        useCase: 'Parties need DJs. We’re bringing IV’s finest here. Listen to their sick remixes and if you like what you hear, invite them to your next party.',
        icon: 'customer-service',
        professional: true,
        price: {
          number: '25',
          unit: 'hour',
          avg: 'Average: $25 per hour',
        },
      },
      // 'Rent house': {
      //   name: 'Rent house',
      //   icon: 'house',
      //   professional: true,
      //   price: {
      //     number: '150',
      //     unit: 'night',
      //     avg: 'Average: $150 per night',
      //   },
      // },
    },
  },
};

export default allCategories;
