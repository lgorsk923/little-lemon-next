export interface ReviewInfo {
    key: number;
    image: string;
    name: string;
    text?: string;
    rating: number;
}

export const reviewsData: ReviewInfo[] = [
    {
        key: 1,
        image: '/Jordan.jpeg',
        name: 'Jordan',
        text: 'The food was absolutely amazing! The flavors were rich and the presentation was beautiful. Highly recommend!',
        rating: 5,
    },
    {
        key: 2,
        image: '/Chloe.jpeg',
        name: 'Chloe',
        text: 'I had a great experience at the restaurant. The staff was friendly and the atmosphere was cozy. Will definitely come back!',
        rating: 4,
    },
    {
        key: 3,
        image: '/Charlee.jpeg',
        name: 'Charlee',
        text: 'The service was a bit slow, but the food made up for it. The dishes were flavorful and well-prepared. Overall, a good dining experience.',
        rating: 4,
    },
];