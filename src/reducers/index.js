const initalState = 
{
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
};

export const reducer = (state = initalState, action) =>
{
    switch(action.type)
    {
        case 'BUY':
            return{
                ...state,
                car: {
                    ...state.car,
                    features: [...state.car.features, state.additionalFeatures.filter(feature => feature.id === action.payload)[0]]
                },
                additionalFeatures: state.additionalFeatures.filter(feature => feature.id !== action.payload),
                additionalPrice: state.additionalPrice += state.additionalFeatures.filter(feature => feature.id === action.payload)[0].price
            }
        case 'REMOVE':
            return{

            };
        default:
            return state;
    }
}

/*switch(action.payload)
            {
                case 'V-6 engine':
                    return{
                        ...state,
                        car: {
                            ...state.car,
                            features: [...state.car.features, action.payload]
                        },
                        additionalPrice: state.additionalPrice + state.additionalFeatures[0].price
                    };
                    case 'Racing detail package':
                    return{
                        ...state,
                        car: {
                            ...state.car,
                            features: [...state.car.features, action.payload]
                        },
                        additionalPrice: state.additionalPrice + state.additionalFeatures[1].price
                    };
                    case 'Premium sound system':
                        return{
                            ...state,
                            car: {
                                ...state.car,
                                features: [...state.car.features, action.payload]
                            },
                            additionalPrice: state.additionalPrice + state.additionalFeatures[2].price
                        };
                        case 'Rear spoiler':
                            return{
                                ...state,
                                car: {
                                    ...state.car,
                                    features: [...state.car.features, action.payload]
                                },
                                additionalPrice: state.additionalPrice + state.additionalFeatures[3].price
                            };
                            break

            }*/