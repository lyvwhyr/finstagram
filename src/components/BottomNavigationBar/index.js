import React from 'react'
import './index.css'

const BottomNavigationBar = () => {
    return (<div className="bottom-navigation-bar-container">
        <span class="material-icons">
            home
            </span>
        <span class="material-icons">
            search
        </span>
        <span class="material-icons">
            favorite_border
        </span>
        <span class="material-icons">
            person_outline
        </span>
    </div>
    )
}

export { BottomNavigationBar }