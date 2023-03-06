import mock from '../mock.json'

export default function handler(req, res) {
    res.status(200).json(mock)
}  //endpoint серверного API => next API документация