import { AssetPath } from "./Constants";

export const membershipData = [
    {
        price: 25,
        membershipName: 'Diamond',
        color: '#27DA5F',
        availablePerks: [0, 1, 2],
        assetPath: AssetPath.diamondImage,
        allPerks: [
            '20 posts',
            'Credit is good for 60 days',
            'Through-app messages',
            'Phone calls',
            'WhatsApp',
            'Unused days are reusable',
        ]
    },
    {
        price: 35,
        membershipName: 'Saphhire',
        color: '#7622FF',
        availablePerks: [0, 1, 2, 3, 4],
        assetPath: AssetPath.sapphireImage,
        allPerks: [
            '40 posts',
            'Credit is good for 90 days',
            'Through-app messages',
            'Phone calls',
            'WhatsApp',
            'Unused days are reusable',
        ]
    },
    {
        price: 35,
        membershipName: 'Platinum',
        color: '#02CCA6',
        availablePerks: [0, 1, 2, 3, 4, 5],
        assetPath: AssetPath.platinumImage,
        allPerks: [
            '40 posts',
            'Credit is good for 180 days',
            'Through-app messages',
            'Phone calls',
            'WhatsApp',
            'Unused days are reusable',
        ]
    },
    {
        price: 15,
        membershipName: 'Single Post',
        color: 'var(--primary)',
        availablePerks: [0, 1],
        assetPath: AssetPath.singleImage,
        allPerks: [
            'Single post',
            'Credit used immediately',
            'Through-app messages',
            'Phone calls',
            'WhatsApp',
            'Unused days are reusable',
        ]
    },
    {
        price: 45,
        membershipName: 'Silver',
        color: '#E6631A',
        availablePerks: [0, 1, 2],
        assetPath: AssetPath.silverImage,
        allPerks: [
            '5 post',
            'Credit is good for 15 days',
            'Through-app messages',
            'Phone calls',
            'WhatsApp',
            'Unused days are reusable',
        ]
    },
    {
        price: 55,
        membershipName: 'Gold',
        color: '#26BFE1',
        availablePerks: [0, 1, 2],
        assetPath: AssetPath.goldImage,
        allPerks: [
            '10 post',
            'Credit is good for 21 days',
            'Through-app messages',
            'Phone calls',
            'WhatsApp',
            'Unused days are reusable',
        ]
    }
]