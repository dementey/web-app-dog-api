import React from 'react';
import isoFetch from 'isomorphic-fetch';


class RandomImage extends React.PureComponent {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        // this.loadData();
        // не надо запускать асинхронные или долгие операции из конструктора
        // конструктор инициализирует только КЛАСС, это ещё не React-компонент
        // конструктор должен быть лёгким и быстрым
    }

    componentDidMount() {
        this.loadData();
    }

    state = {
        dataReady: false,
        name: "???",
        message: [],
    };

    fetchError = (errorMessage) => {
        console.error(errorMessage);
    };

    fetchSuccess = (loadedData) => {
        console.log(loadedData);
        this.setState({
            dataReady: true,
            status: loadedData.status,
            message: loadedData.message,
        });
    };

    loadData = () => {

        isoFetch("https://dog.ceo/api/breeds/image/random", {
            method: 'get',
            headers: {
                "Accept": "application/json",
            },
        })
            .then((response) => { // response - HTTP-ответ
                if (!response.ok) {
                    let Err = new Error("fetch error " + response.status);
                    Err.userMessage = "Ошибка связи";
                    throw Err; // дальше по цепочке пойдёт отвергнутый промис
                }
                else
                    return response.json(); // дальше по цепочке пойдёт промис с пришедшими по сети данными
            })
            .then((data) => {
                try {
                    this.fetchSuccess(data); // передаём полезные данные в fetchSuccess, дальше по цепочке пойдёт успешный пустой промис
                }
                catch (error) {
                    this.fetchError(error.message); // если что-то пошло не так - дальше по цепочке пойдёт отвергнутый промис
                }
            })
            .catch((error) => {
                this.fetchError(error.userMessage || error.message);
            })
            ;

    };

    render() {

        if (!this.state.dataReady)
            return <div>загрузка данных...</div>;

        return (
            <div>
                <img src={this.state.message} alt={this.state.message} onClick={this.loadData} />
            </div >
        );
    }
}

export default RandomImage;
