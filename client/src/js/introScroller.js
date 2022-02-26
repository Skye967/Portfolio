

export const portfolioDisplay = function () {
    const divRemove = document.querySelector( '.code' );
    const enlargeBio = document.querySelector( '.bio_content' );
    const changeProject = document.querySelector( '.projects' );
    const menuButton = document.querySelector( ".menu_button" );
    const navbar = document.querySelector( ".navbar" );
    const viewport = window.innerWidth;
    if ( divRemove == null ) {
        return;
    }
    if ( viewport < 500 ) {
        divRemove.style.display = "none";
        enlargeBio.style.fontSize = "x-large";
        changeProject.style.flexDirection = "Column";
        menuButton.style.display = "flex";
        navbar.style.display = "none";
        return;
    }
    else{
        divRemove.style.display = "flex";
        enlargeBio.style.fontSize = "larger";
        changeProject.style.flexDirection = "row";
        menuButton.style.display = "none";
        navbar.style.display = "flex";
        return;
    }
};
portfolioDisplay();


export const projectDisplay = window.onresize = function () {
    const intViewportWidth = window.innerWidth;
    const projects = document.querySelector( '.projects' );
    const project1 = document.querySelector( '#project1' );
    const project2 = document.querySelector( '#project2' );
    const project3 = document.querySelector( '#project3' );
    if ( intViewportWidth < 800 ) {
        projects.style.display = "block";
        projects.style.padding = " 5% 25%";
        project1.style.width = "100%";
        project2.style.width = "100%";
        project3.style.width = "100%";
    }
    if ( intViewportWidth > 800 ) {
        projects.style.display = "flex";
        projects.style.padding = " 5% 5%";
        project1.style.width = "300px";
        project2.style.width = "300px";
        project3.style.width = "300px";
    }

};

export const scroller = window.addEventListener( 'scroll', function () {
    const introScroll = document.querySelector( '.introImage' );
    const valueA = window.scrollY;
    const valueB = window.scrollY / 2;
    introScroll.style.transform = "translate3d(" + valueB + "px, " + valueA + "px, 0)";
} );

export const bioScroller = window.addEventListener( 'scroll', function () {
    const bioScroll = document.querySelector( '.bio_content' );
    const intViewportWidth = window.innerWidth;
    const intViewportHeight = window.innerHeight;
    const value2 = window.scrollY;
    let num = 0;
    let opaNum = 0;
    if ( intViewportHeight > 1700 ) {
        bioScroll.style.transform = "translate3d(0, 0, 0)";
        bioScroll.style.opacity = 1;
    }
    if ( intViewportWidth < 1040 && intViewportHeight < 1700 && value2 < 950 ) {
        num = 950 - value2;
        bioScroll.style.transform = "translate3d(-" + num + "px, 0, 0)";
        opaNum = ( value2 - 650 ) / 200;
        bioScroll.style.opacity = opaNum;
    } else if ( value2 > 950 && intViewportWidth < 1040 ) {
        bioScroll.style.transform = "translate3d(0, 0, 0)";
        bioScroll.style.opacity = 1;
    }
    if ( value2 < 700 && intViewportHeight < 1700 && intViewportWidth > 1040 ) {
        num = 700 - value2;
        bioScroll.style.transform = "translate3d(-" + num + "px, 0, 0)";
        opaNum = ( value2 - 500 ) / 200;
        bioScroll.style.opacity = opaNum;
    } else if ( value2 > 700 && intViewportWidth > 1040 ) {
        bioScroll.style.transform = "translate3d(0, 0, 0)";
        bioScroll.style.opacity = 1;
    }
} );

export const projectScroller = window.addEventListener( 'scroll', function () {
    const projectScroll = document.querySelector( '.projects' );
    let value3 = window.scrollY;
    const intViewportWidth = window.innerWidth;
    const intViewportHeight = window.innerHeight;
    let opaNum2 = 0;
    if ( value3 < 2300 && intViewportHeight < 800 && intViewportWidth > 970 ) {
        opaNum2 = ( value3 - 1900 ) / 400;
        projectScroll.style.opacity = opaNum2;
        console.log( value3 );
    }
    if ( value3 < 2700 && intViewportHeight < 800 && intViewportWidth < 970 ) {
        opaNum2 = ( value3 - 2300 ) / 400;
        projectScroll.style.opacity = opaNum2;
    }
    if ( value3 < 2200 && intViewportHeight > 800 && intViewportWidth < 970 && intViewportWidth > 500 ) {
        opaNum2 = ( value3 - 1800 ) / 400;
        projectScroll.style.opacity = opaNum2;
    }
    if ( value3 < 2500 && intViewportHeight > 800 && intViewportWidth < 500 ) {
        opaNum2 = ( value3 - 2100 ) / 400;
        projectScroll.style.opacity = opaNum2;
    }
    else if ( value3 > 2500 && intViewportWidth < 500 ) {
        projectScroll.style.opacity = 1;
    }
} );

// const modal = document.getElementById( "myModal" );

// const btn = document.getElementById( "myBtn" );

// const span = document.getElementsByClassName( "close" )[ 0 ];


export const descriptionOpen1 = function () {
    const modal = document.getElementById( "myModal1" );
    modal.style.display = "block";
};

export const descriptionClose1 = function () {
    const modal = document.getElementById( "myModal1" );
    modal.style.display = "none";
};

export const descriptionOpen2 = function () {
    const modal = document.getElementById( "myModal2" );
    modal.style.display = "block";
};

export const descriptionClose2 = function () {
    const modal = document.getElementById( "myModal2" );
    modal.style.display = "none";
};

export const descriptionOpen3 = function () {
    const modal = document.getElementById( "myModal3" );
    modal.style.display = "block";
};

export const descriptionClose3 = function () {
    const modal = document.getElementById( "myModal3" );
    modal.style.display = "none";
};

var navDisplay = false;

export const menuOpenClose = function () {
    const navbar = document.querySelector( ".navbar" );
    switch ( navDisplay ) {
        case false:
            navbar.style.display = "flex";
            navDisplay = true;
            break;

        case true:
            navbar.style.display = "none";
            navDisplay = false;
            break;
        
        default:
            
    }
};



// export const windowClose = window.onclick = function ( event ) {
//     if ( event.target == modal ) {
//         modal.style.display = "none";
//     }
// };
