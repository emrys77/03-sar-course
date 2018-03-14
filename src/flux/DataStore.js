import alt          from './Alt.js';
import DataActions  from './DataActions.js';

class DataStore {
    constructor() {
        this.data = {};

        this.bindListeners({
            // Listen to the getSuccess() in DataActions.js
            handleSuccess: DataActions.GET_SUCCESS
        });

        this.exportPublicMethods({
            getAll:             this.getAll,
            getAllPages:        this.getAllPages,
            getAllQuestions:    this.getAllQuestions,
            getPageBySlug:      this.getPageBySlug
        });
    }

    // Store data returned by getSuccess() in DataActions.js
    handleSuccess(data) {
        this.setState({ data });
    }

    // Returns all pages and posts
    getAll() { 
        return this.getState().data; 
    }

    // Returns all Pages
    getAllPages() { 
        return this.getState().data.pages; 
    }

    // Returns all Questions
    getAllQuestions() { 
        return this.getState().data.questions;
    }

    // Returns a Page by provided slug
    getPageBySlug(slug){
        const pages = this.getState().data.pages;
        return pages[Object.keys(pages).find((page, i) => {
            return pages[page].slug === slug;
        })] || {};
    }

}

export default alt.createStore(DataStore, 'DataStore');