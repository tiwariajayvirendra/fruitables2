import {all,fork} from "redux-saga/effects"
import { category } from "./category.saga"

export function* root(){
    yield all([
        fork(category)
    ])
}