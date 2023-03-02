import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IProduct} from "../models/models";

type catalog = IProduct[];
const initialState: catalog = [
    {
        id: 1,
        name: 'Бананы с запиской-пожеланием',
        price: 1250,
        count: 5,
        image: 'https://megatitan.ru/upload/iblock/84e/jpb74qm07shagyfswrue7r40lx5gicuo.jpg',
    },
    {
        id: 2,
        name: 'Турецкие бананы',
        price: 400,
        count: 5,
        image: 'https://megatitan.ru/upload/iblock/84e/jpb74qm07shagyfswrue7r40lx5gicuo.jpg',
    },
    {
        id: 3,
        name: 'Атлантические бананы',
        price: 3000,
        count: 5,
        image: 'https://megatitan.ru/upload/iblock/84e/jpb74qm07shagyfswrue7r40lx5gicuo.jpg',
    },
    {
        id: 4,
        name: 'Грузинские бананы',
        price: 2500,
        count: 5,
        image: 'https://megatitan.ru/upload/iblock/84e/jpb74qm07shagyfswrue7r40lx5gicuo.jpg',
    },
    {
        id: 5,
        name: 'Смоленские бананы',
        price: 150,
        count: 5,
        image: 'https://megatitan.ru/upload/iblock/84e/jpb74qm07shagyfswrue7r40lx5gicuo.jpg',
    },
    {
        id: 6,
        name: 'Астраханские бананы',
        price: 250,
        count: 6,
        image: 'https://megatitan.ru/upload/iblock/84e/jpb74qm07shagyfswrue7r40lx5gicuo.jpg',
    },
    {
        id: 7,
        name: 'Подмосковные бананы',
        price: 600,
        count: 4,
        image: 'https://megatitan.ru/upload/iblock/84e/jpb74qm07shagyfswrue7r40lx5gicuo.jpg',
    },
    {
        id: 8,
        name: 'Искусственные бананы',
        price: 250,
        count: 5,
        image: 'https://megatitan.ru/upload/iblock/84e/jpb74qm07shagyfswrue7r40lx5gicuo.jpg',
    },
    {
        id: 9,
        name: 'Бананы с запахом летних дынь',
        price: 350,
        count: 1,
        image: 'https://megatitan.ru/upload/iblock/84e/jpb74qm07shagyfswrue7r40lx5gicuo.jpg',
    },
    {
        id: 10,
        name: 'Бананы обыкновенные',
        price: 200,
        count: 5,
        image: 'https://megatitan.ru/upload/iblock/84e/jpb74qm07shagyfswrue7r40lx5gicuo.jpg',
    },

];

export const catalogSlice = createSlice({
    name: 'catalog',
    initialState,
    reducers: {

    }
})

export const catalogReducer = catalogSlice.reducer;