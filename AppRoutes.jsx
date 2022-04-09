import React from "react";

import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import NoticePage from "./src/pages/NoticePage/List";
import NoticePageNew from "./src/pages/NoticePage/New";
import NoticePageEdit from "./src/pages/NoticePage/Edit";
import CategoryPage from "./src/pages/CategoryPage/List";
import CategoryPageNew from "./src/pages/CategoryPage/New";
import CategoryPageEdit from "./src/pages/CategoryPage/Edit";


const AppRoutes = () => {

    return (
        <Router>
            <Routes>
                <Route exact path="/" 
                element={
                    <NoticePage />
                }/>
                <Route exact path="/notice/new" 
                element={
                    <NoticePageNew />
                }/>
                <Route exact path="/notice/edit" 
                element={
                    <NoticePageEdit />
                }/>
                <Route exact path="/category/new" 
                element={
                    <CategoryPageNew />
                }/>
                <Route exact path="/categories" 
                element={
                    <CategoryPage />
                }/>
                <Route exact path="/category/edit" 
                element={
                    <CategoryPageEdit />
                }/>
            </Routes>
        </Router>
    )
}

export default AppRoutes;