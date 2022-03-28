import React from 'react'
import Error404 from "./pages/Error404";
import {Routes, Route} from "react-router-dom";
import PreJunior from "./pages/PreJunior";
import Junior from "./pages/Junior";
import JuniorPlus from "./pages/Junior-plus";

function RoutesHw() {
    return (
        <div>
            {/*Switch выбирает первый подходящий роут*/}

            <Routes>
                {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
                {/*exact нужен чтоб указать полное совподение (что после '/' ничего не будет)*/}
                <Route path={'/*'} element={<Error404/>}/>
                <Route path={'/hw-ignat'} element={<PreJunior/>}/>
                <Route path={'/hw-ignat/junior'} element={<Junior/>}/>
                <Route path={'/hw-ignat/junior-plus'} element={<JuniorPlus/>}/>

                {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}

            </Routes>
        </div>
    )
}

export default RoutesHw
