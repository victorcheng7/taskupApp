// professional == custom pricing
// descriptionPlaceholder == requires describing a bit more (can't be done in status)
    // For example if they're selling multiple things
// Status - unique price, car make, time you're leaving, can pick up in IV
const allCategories = {

  Delivery: {
    name: 'Delivery/Food',
    useCase: 'Ever too lazy or too busy to pick up food? Ever wanted a tasty inexpensive meal? Ever forget something on campus and need someone to get it for you? Well these fine Gauchos got your back and operate lightning fast.',
    tip: 'Just ask them how fast they can deliver to you',
    images: [ require(`../assets/BAphotos/delivery.jpg`), 'https://www.rd.com/wp-content/uploads/2016/03/01-13-things-your-pizza-guy-wont-tell-you-phone.jpg', 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/video/wibbitz/wbz-grocery-shopping-tips.jpg', 'https://www.tasteofhome.com/wp-content/uploads/2018/04/shutterstock_133259828.jpg'],
    subCategories: {
      Cooking: {
        name: 'Homemade Food',
        icon: 'shopping',
        professional: true,
        descriptionPlaceholder: 'I do meal preps small ($5), medium ($7), and large sizes ($9). You can choose your protein (chicken, shrimp, and beef), main (brown rice and quinoa), and sides. I also make some amazing fruit smoothies for $2.50.',
        uploadTitle: 'Upload a picture of your best meals',
        price: {
          number: '10',
          unit: 'food',
          avg: 'Price: $7 per meal',
        },
      },
      'Meal in IV': {
        name: '(Delivery) Meal in IV',
        icon: 'shopping',
        professional: false,
        price: {
          number: '10',
          unit: 'delivery',
          avg: 'Price: $3 per delivery',
        },
      },
      '(Delivery) Groceries in IV': {
        name: '(Delivery) Groceries in IV',
        icon: 'shopping',
        professional: false,
        price: {
          number: '10',
          unit: 'delivery',
          avg: 'Price: $3 per delivery',
        },
      },
      '(Delivery) Groceries in Goleta': {
        name: 'Groceries in Goleta',
        icon: 'shopping',
        professional: false,
        price: {
          number: '10',
          unit: 'delivery',
          avg: 'Price: $5 per delivery',
        },
      },
      '(Delivery) Random Pickup': {
        name: 'Random Pickup',
        icon: 'shopping',
        professional: false,
        price: {
          number: '3',
          unit: 'delivery',
          avg: 'Price: $3 each delivery',
        },
      },
    },
  },

  Driving: {
    name: 'Driving',
    useCase: 'Ever needed a ride after a party? Too lazy to go to class? Want to do groceries or grab food? Request these Gauchos on demand and they\'ll take you',
    tip: 'Cheaper and better than Uber/Lyft',
    images: [ require(`../assets/BAphotos/driving.jpg`), 'https://images.pexels.com/photos/376729/pexels-photo-376729.jpeg?cs=srgb&dl=adult-auto-automobile-376729.jpg&fm=jpg', 'https://blog.mercuryinsurance.com/wp-content/uploads/2015/06/StudentandYoungDriverDiscounts.jpg', 'https://floridataxcollectors.com/wp-content/uploads/2017/08/consumer-protection.jpg'],
    subCategories: {
      'All around IV': {
        name: 'All around IV',
        icon: 'car',
        professional: false,
        price: {
          number: '3',
          unit: 'ride',
          avg: 'Price: $3 each ride',
        },
      },
      'To Downtown': {
        name: 'To Downtown',
        icon: 'car',
        professional: false,
        price: {
          number: '6',
          unit: 'ride',
          avg: 'Price: $6 each ride',
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
      'To UCSB': {
        name: 'To UCSB',
        icon: 'car',
        professional: false,
        price: {
          number: '3',
          unit: 'ride',
          avg: 'Price: $3 each ride',
        },
      },
      'To SBCC': {
        name: 'To SBCC',
        icon: 'car',
        professional: false,
        price: {
          number: '5',
          unit: 'ride',
          avg: 'Price: $5 each ride',
        },
      },
      'General Requests': {
        name: 'Other',
        icon: 'car',
        professional: false,
        price: {
          number: 'Custom',
          unit: '(Negotiable)',
          avg: 'Custom Pricing',
        },
      },
    },
  },

  Party: {
    name: 'Party/Event',
    useCase: 'Throwing down a sick party or need to borrow some stuff? Offering all the help you\'ll need',
    tip: 'Throw a lit party',
    images: [ 'http://guardianlv.com/wp-content/uploads/2014/04/Isla-Vista-Annual-College-Party-Turns-Violent-650x368.jpg', 'https://i2.wp.com/www.dailynexus.com/wp-content/uploads/2011/10/porter.jpg?zoom=2&resize=345%2C203'],
    subCategories: {
      Rent: {
        name: 'Rent (Backyard, speakers, lights)',
        icon: 'home',
        professional: true,
        descriptionPlaceholder: 'Charging $50 a night for the backyard', 
        uploadTitle: 'Upload a picture of what you\'re renting',
        images: [ require(`../assets/BAphotos/house.jpg`) ],
        price: {
          number: '50',
          unit: 'day',
          avg: 'Custom Pricing',
        },
      },
      Bouncer: {
        name: 'Bouncer',
        useCase: 'Ever needed someone to check your FB invites at a party? Ever needed more people to stop randos from barging into your house? These fine men and women are ready to be at your service.',
        icon: 'safety-certificate',
        descriptionPlaceholder: 'I\'ve been a bouncer for Sig Ep, DTD, and a few local house parties. I can help with checking Facebook invites and resolve conflict.', 
        uploadTitle: 'Upload a badass picture of you',
        professional: true,
        images: [ require(`../assets/BAphotos/bouncer.jpg`) ],
        price: {
          number: '40',
          unit: 'night',
          avg: 'Custom Pricing',
        },
      },
      DJ: {
        name: 'DJ',
        useCase: 'Parties need DJs. We’re bringing IV’s finest here. Listen to their sick remixes and if you like what you hear, invite them to your next party.',
        icon: 'customer-service',
        descriptionPlaceholder: 'I\'ve been a DJ for the last year doing gigs at frats and local house parties. I mostly focus on EDM, but can also do other themes. Checkout my Soundcloud!', 
        uploadTitle: 'Upload a badass picture of you DJing',
        professional: true,
        images: [ require(`../assets/BAphotos/DJ.jpg`) ],
        price: {
          number: '25',
          unit: 'hour',
          avg: 'Custom Pricing',
        },
      },
      Events: {
        name: 'Events',
        icon: 'customer-service',
        professional: true, 
        price: {
          number: '25',
          unit: 'hour',
          avg: 'Custom Pricing',
        },
      },
    },
  },

  Homework: {
    name: 'Homework',
    useCase: 'Ever needed help on an assignment? Get your essay or math homework done quick and easy. Homework buddies are here to save your day!',
    tip: 'Get homework help now',
    images: ['http://www.snco.com/blog/wp-content/uploads/2016/08/Engineering-Students.jpg', 'https://college-homework-help.org/static/img/regular/homework_motivated.jpg', 'https://www.tutorcorps.com/wp-content/uploads/2016/05/iStock_000010509196_XXXLarge-e1463182145263.jpg', 'https://essayforme.azureedge.net/assignment-help-online.jpg', 'https://study.eshipglobal.com/img/StudentsIMG.jpg'],
    descriptionPlaceholder: 'I got A\'s in: Econ 101, Econ 2, CS 24. I\'m proficient in C++, Excel, and Matlab. If you\'re looking for help in engineering or econ, I gotchu',
    uploadTitle: 'Upload your transcript (used for verification. not public)',
    subCategories: {
      'Computer Science': {
        name: 'Computer Science',
        icon: 'book',
        professional: true,
        price: {
          number: '25',
          unit: 'hour',
          avg: 'Custom Pricing',
        },
      },
      Mathematics: {
        name: 'Mathematics',
        icon: 'book',
        professional: true,
        price: {
          number: '25',
          unit: 'hour',
          avg: 'Custom Pricing',
        },
      },
      Physics: {
        name: 'Physics',
        icon: 'book',
        professional: true,
        price: {
          number: '25',
          unit: 'hour',
          avg: 'Custom Pricing',
        },
      },
      Biology: {
        name: 'Biology',
        icon: 'book',
        professional: true,
        price: {
          number: '25',
          unit: 'hour',
          avg: 'Custom Pricing',
        },
      },
      Chemistry: {
        name: 'Chemistry',
        icon: 'book',
        professional: true,
        price: {
          number: '25',
          unit: 'hour',
          avg: 'Custom Pricing',
        },
      },
      Communication: {
        name: 'Communication',
        icon: 'book',
        professional: true,
        price: {
          number: '25',
          unit: 'hour',
          avg: 'Custom Pricing',
        },
      },
      History: {
        name: 'History',
        icon: 'book',
        professional: true,
        price: {
          number: '25',
          unit: 'hour',
          avg: 'Custom Pricing',
        },
      },
      English: {
        name: 'English',
        icon: 'book',
        professional: true,
        price: {
          number: '25',
          unit: 'hour',
          avg: 'Custom Pricing',
        },
      },
      Economics: {
        name: 'Economics',
        icon: 'book',
        professional: true,
        price: {
          number: '25',
          unit: 'hour',
          avg: 'Custom Pricing',
        },
      },
      Other: {
        name: 'Other',
        icon: 'book',
        professional: true,
        price: {
          number: '25',
          unit: 'hour',
          avg: 'Custom Pricing',
        },
      },
    },
  },

  Rent: {
    name: 'Rent',
    useCase: 'Need a place to crash? A place to throw a party? These are Gauchos who have extra space for you. Just one rule - don’t trash the place.',
    tip: 'Need some space?',
    images: ['https://i.pinimg.com/736x/8a/7c/18/8a7c187ab680f8ce62ef32274a716bd0--isla-vista-california-good-colleges.jpg', 'http://islavistarental.com/wp-content/uploads/2012/01/elgreco_th-6518.jpg'],
    subCategories: {
      'Parking Space': {
        name: 'Parking Space',
        icon: 'home',
        professional: true,
        images: [ require(`../assets/BAphotos/parking.jpg`) ],
        descriptionPlaceholder: 'I charge $2 an hour or $5 a day. I\'m live on 66 block, Trigo',
        price: {
          number: '2',
          unit: 'hour',
          avg: 'Custom Pricing',
        },
      },
      Crash: {
        name: 'Need a place to crash',
        icon: 'home',
        professional: true,
        descriptionPlaceholder: 'I\'m charging $20 a night and prefer people who are more quiet.',
        uploadTitle: 'Upload a picture of your place',
        price: {
          number: '10',
          unit: 'night',
          avg: 'Custom Pricing',
        },
      },
    },
  },

  Cleaning: {
    name: 'Cleaning',
    useCase: 'Got a messy bathroom, a messy room? Ever needed someone to clean your house after a party? Ever needed your kitchen tidied up? House cleaners know what’s up. They’ve got the tools and experience to have your house spotless.',
    tip: 'Your room spotless in an hour',
    images: [ require(`../assets/BAphotos/beforeaftercleaning.jpg`), 'https://images.pexels.com/photos/1629818/pexels-photo-1629818.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 'https://images.pexels.com/photos/713297/pexels-photo-713297.jpeg?cs=srgb&dl=adult-cleaning-flora-713297.jpg&fm=jpg'],
    subCategories: {
      Dishes: {
        name: 'Dishes',
        useCase: 'Your kitchen piled with dishes? Ever too lazy to do the dishes that week? These Gauchos scrub like no other and will have your sink spotless in 30.',
        icon: 'home',
        professional: false,
        images: [ require(`../assets/BAphotos/beforeafterdishes2.png`)],
        price: {
          number: '10',
          unit: 'cleaning',
          avg: 'Price: $10 each cleaning',
        },
      },
      Laundry: {
        name: 'Laundry',
        useCase: 'Parties need DJs. We’re bringing IV’s finest here. Listen to their sick remixes and if you like what you hear, invite them to your next party.',
        icon: 'customer-service',
        professional: false,
        price: {
          number: '10',
          unit: 'laundry',
          avg: 'Average: $10 per hour',
        }
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
    useCase: 'Ever needed a fresh cut before a date, someone to curl your hair without burning your wallet? These Gauchos know how to make your hair on fleek and have done so for their friends.',
    tip: 'Look good in an hour',
    subCategories: {
      'Cut Hair': {
        name: 'Cut Hair',
        icon: 'scissor',
        professional: true,
        descriptionPlaceholder: 'I\'ve cut hair for 4 years and do about 25 cuts a week. I charge $25 for most cuts. If the design is very large, there will be additional charges. Haircut and Facial hair will be an additional $5', 
        uploadTitle: 'Upload pictures of your best cuts',
        images: [ require(`../assets/BAphotos/barberBA.jpg`)],
        price: {
          number: '10',
          unit: 'cut',
          avg: 'Custom Pricing',
        },
      },
      'Curl Hair': {
        name: 'Curl Hair',
        icon: 'scissor',
        professional: true,
        descriptionPlaceholder: 'I curl hair for my sorority girls and have curled ~100 people\'s hair. I charge $20 per session', 
        uploadTitle: 'Upload pictures of your best curls',
        images: [ require(`../assets/BAphotos/curlinghair.jpg`) ],
        price: {
          number: '10',
          unit: 'curl',
          avg: 'Custom Pricing',
        },
      },
      'Braid Hair': {
        name: 'Braid Hair',
        icon: 'smile',
        professional: true,
        descriptionPlaceholder: 'I braid hair for my friends and have briaded ~100 people\'s hair. I charge $20 per session', 
        uploadTitle: 'Upload pictures of your best braids',
        images: [ require(`../assets/BAphotos/braid-spray.jpg`), 'https://www.standardmedia.co.ke/evemedia/eveimages/wednesday/kjmrirqnczapile85j95819d707b07fb.jpg'],
        price: {
          number: '10',
          unit: 'braid',
          avg: 'Custom Pricing',
        },
      },
      'Dye Hair': {
        name: 'Dye Hair',
        icon: 'smile',
        professional: true,
        descriptionPlaceholder: 'I dye hair for my friends and have dyed ~100 people\'s hair. I charge $20 per session', 
        uploadTitle: 'Upload pictures of your best braids',
        images: [ 'http://www.cuded.com/wp-content/uploads/2015/12/Purple-and-blue-hair.jpg'],
        price: {
          number: '10',
          unit: 'braid',
          avg: 'Custom Pricing',
        },
      },
      Eyebrows: {
        name: 'Eyebrows',
        useCase: 'Need your eyebrows threaded? Need to look sharp? These Gauchos have care and precision and know how to make your eyebrows on fleek.',
        icon: 'smile',
        images: [ 'http://dayaspa.ca/wp-content/uploads/2017/11/before-and-after.jpg'],
        descriptionPlaceholder: 'I do eyebrow plucking and eyebrow threading on the side. Here\'s a link to my insta - ... I charge $10 per session', 
        uploadTitle: 'Upload pictures of your work (eyebrows)',
        professional: true,
        price: {
          number: '10',
          unit: 'threading',
          avg: 'Custom Pricing',
        },
      },
      Makeup: {
        name: 'Makeup',
        useCase: 'Trying to get your makeup done before a party? Trying to transform yourself to stunning beauty before a date? These Gauchos are not just great company, they’re trained to make you look great.',
        icon: 'smile',
        images: [ require(`../assets/BAphotos/beforeaftermakeup.jpg`) ],
        descriptionPlaceholder: 'I do makeup for all my sorority girls with XYZ products. I do XYZ and charge $15 per session', 
        uploadTitle: 'Upload pictures of your work (makeup)',
        professional: true,
        price: {
          number: '10',
          unit: 'makeup',
          avg: 'Custom Pricing',
        },
      },
      Manicure: {
        name: 'Nails',
        useCase: 'Salons are too expensive. Meet another Gaucho as they transform your nails to beauty.',
        icon: 'smile',
        descriptionPlaceholder: 'I do nails for all my sorority girls with XYZ products. I do XYZ and charge $15 per session', 
        uploadTitle: 'Upload pictures of your work (nails)',
        professional: true,
        price: {
          number: '10',
          unit: 'manicure',
          avg: 'Custom Pricing',
        },
      },
    },
  },


  Other: {
    name: 'Other',
    tip: 'Looking for something else',
    subCategories: {
      Photography: {
        name: 'Photography',
        useCase: 'Ever needed a professional photographer? Take a look at their portfolio, pick who you like, and bring them the next time you go out and about. They’ll leave you with an album of new photos for Insta.',
        icon: 'camera',
        descriptionPlaceholder: 'I\'ve done people\'s grad photos, am solid in photoshop, and can do a sick photoshoot anywhere you want.', 
        uploadTitle: 'Upload your best work (photos)',
        professional: true,
        images: [ require(`../assets/BAphotos/Gradphoto.jpg`), 'https://www.naceweb.org/uploadedImages/images/2018/feature/class-of-2016-masters-graduates-had-strong-outcomes.jpg'],
        price: {
          number: '25',
          unit: 'hour',
          avg: 'Custom Pricing',
        },
      },
      Videographer: {
        name: 'Video editing / Graphic Designer',
        useCase: 'Need someone to take a shoot or edit a video for you? Showcasing IV\'s finest videographers',
        icon: 'customer-service',
        descriptionPlaceholder: 'I\'m good with Adobe Premiere and photoshop. Check out some of my past work at https://www.google.drive/owiejf89283', 
        uploadTitle: 'Upload your best work (videos/photos)',
        professional: true,
        images: [ ],
        price: {
          number: '25',
          unit: 'hour',
          avg: 'Custom Pricing',
        },
      },
      Petsitting: {
        name: 'Pet sitting',
        icon: 'user',
        useCase: 'Need help cleaning? Need help watching him/her for a day? These Gauchos know how much they mean to you and will handle them with care.',
        images: ['https://www.petsit.com/stuff/contentmgr/files/0/b54b67c8fc3178e47a4564632904324d/image/as_woman_dog_site_hero_image_1170.jpg'], //require(`../assets/BAphotos/petsitter.jpeg`)
        descriptionPlaceholder: 'I\'m good with pets and have two huskies myself.', 
        professional: false,
        price: {
          number: '10',
          unit: 'hour',
          avg: 'Custom Pricing',
        },
      },
      Massage: {
        name: 'Massage',
        icon: 'user',
        useCase: 'Ever needed to relax after a big game, a workout, or just stressed with midterms? These Gauchos are trained to give amazing massages!',
        images: [ require(`../assets/BAphotos/massage.jpeg`), 'https://bodybalancespa.biz/wp-content/uploads/2017/11/Shoulder-massage.jpg', 'http://lc.allsmbsites.com/files/2017/03/Lifestyle-Chiropractic-Seattle-Massage-Therapy.jpg', 'https://s3-ap-southeast-2.amazonaws.com/ish-oncourse-scc/74ecae19-244c-4e1c-b43f-52f1d4f65448'],
        descriptionPlaceholder: 'I\'ve given massages to friends/family and have taken the massage classes here at UCSB. 15 minute chair massage for $8, 30 minutes for $18, and 1 hour for $35',
        professional: true,
          price: {
            number: '5',
            unit: 'massage',
            avg: 'Custom Pricing',
          },
      },
    },
  },
};

export const getSubCategoryProperty = (categoryID, subCategoryID, property) => {
  const subCategoryProperty = allCategories[categoryID].subCategories[subCategoryID][property];
  if (subCategoryProperty) {
    return subCategoryProperty;
  }
  return allCategories[categoryID][property];
}

export const getParentCategoryID = (matchSubCategoryID) => {
  let matchedParentCategoryID = '';
  Object.keys(allCategories).forEach((categoryID) => {
    if (matchedParentCategoryID) {
      return;
    }
    Object.keys(allCategories[categoryID].subCategories).forEach((subCategoryID) => {
      if (matchSubCategoryID === subCategoryID) {
        matchedParentCategoryID = categoryID;
        return;
      }
    });
  });
  return matchedParentCategoryID;
};

export default allCategories;