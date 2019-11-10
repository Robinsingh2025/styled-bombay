const items = [
  {
    id: '1',
    name: 'Butter Chicken',
    image: 'public/images/Butter-Chicken.jpg',
    steps: [
      {
        number: '1',
        name: 'Tomato Sauce Base',
        ingredients: [
          {
            id: 'tomato_sauce',
            name: 'Tomato Sauce',
            measurement: '2qt'
          }
        ],
        instructions: [
          {
            video: '1.MOV',
            text: 'Put 2qts of Tomato Sauce in the patela'
          },
          {
            video: '1.MOV',
            text: 'Do something else really important'
          }
        ],
        tools: ['patela'],
        images: ['.public/images'],
        videos: ['./sauce-01.mp4']
      },
      {
        number: '2',
        name: 'Marination Sauce',
        ingredients: [
          {
            id: 'marination_sauce',
            name: 'Marination Sauce',
            measurement: '1qt'
          }
        ],
        instructions: [
          { text: 'Put 1 quart of marination sauce in a bucket', video: '' }
        ],
        tools: ['bucket'],
        images: ['./-01.jpg'],
        videos: ['./-01.mp4']
      },
      {
        number: '3',
        name: 'Marinate',
        ingredients: [
          {
            id: 'chicken',
            name: 'Chicken',
            measurement: '20 lbs'
          }
        ],
        instructions: [
          {
            text: 'Put 20 lbs of chicken in the marinade sauce in the bucket',
            video: ''
          }
        ],
        tools: ['bucket'],
        images: ['./-01.jpg'],
        videos: ['./-01.mp4']
      }
    ]
  },
  {
    id: '2',
    name: 'Sauce',
    steps: [
      {
        number: '1',
        name: 'Before Cooked',
        ingredients: [
          {
            ingredient: 'tomato sauce can',
            measurement: 5
          }
        ],
        instructions: [
          {
            text: 'Grab 5 tomato sauce cans and put them in the big patela',
            video: ''
          }
        ],
        tools: ['patela', 'half-bucket'],
        images: ['./patela-1.jpg'],
        videos: ['./sauce-1.mp4']
      }
    ]
  },
  {
    id: '3',
    name: 'Chicken',
    steps: [
      {
        number: '1',
        name: 'Drumsticks',
        ingredients: [
          {
            ingredient: 'chicken drumsticks',
            measurement: '50lbs'
          }
        ],
        instructions: [
          {
            text: 'Remove the skin from  50lbs of chicken drumsticks',
            video: ''
          }
        ],
        tools: ['weight machine'],
        images: ['./weighing-01.jpg', './skin-removal.jpg'],
        videos: ['./sauce-01.mp4']
      }
    ]
  },
  {
    id: '4',
    name: 'Mango Lassi',
    steps: [
      {
        number: '1',
        name: 'Mixing',
        ingredients: [
          {
            ingredient: 'yogurt',
            measurement: '4qts'
          },
          {
            ingredient: 'mango pulp can',
            measurement: '4 cans'
          },
          {
            ingredient: 'milk',
            measurement: '1 gallon'
          },
          {
            ingredient: 'sugar',
            measurement: '3 cups'
          },
          {
            ingredient: 'orange color',
            measurement: '1 oz'
          }
        ],
        instructions: [
          {
            text:
              'Mix 4qts of yogurt, 4 cans of mango pulp, 1 gallon of milk, 3 cups of sugar, and 1 oz of orange coloring into the measurement bucket. Check the color and adjust coloring accordingly.',
            video: ''
          }
        ],
        tools: ['measurement bucket'],
        images: ['./bucket-01.jpg'],
        videos: ['./mixing-bucket-01.mp4']
      }
    ]
  }
];
export default items;
