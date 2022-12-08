import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'd75eb4dce9264cf48843b37be5d4cbc8',
        });
    }
}

export default AppLoader;
