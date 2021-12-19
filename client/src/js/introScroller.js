
    



export const scroller = window.addEventListener( 'scroll', function () {
        const introScroll = document.querySelector( '.introImage' );
        const valueA = window.scrollY;
        const valueB = window.scrollY / 2;
        introScroll.style.transform = "translate3d(" + valueB + "px, " + valueA + "px, 0)";
    } );

export const bioScroller = window.addEventListener( 'scroll', function () {
    const bioScroll = document.querySelector( '.bio_content' );
    const value2 = window.scrollY;
    let num = 0;
    let opaNum = 0;
    if ( value2 < 700 ) {
        num = 700 - value2;
        bioScroll.style.transform = "translate3d(-" + num + "px, 0, 0)";
        opaNum = ( value2 - 500 ) / 200;
        bioScroll.style.opacity = opaNum;
    } else if ( value2 > 700 ) {
        bioScroll.style.transform = "translate3d(0, 0, 0)";
        bioScroll.style.opacity = 1;
    }
} );

export const projectScroller = window.addEventListener( 'scroll', function() {
    const projectScroll = document.querySelector( '.projects' );
    let value3 = window.scrollY;
    if ( value3 < 2100 ) {
        let opaNum2 = ( value3 - 1700 ) / 400;
        projectScroll.style.opacity = opaNum2;
    } else if ( value3 > 2100 ) {
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

// export const windowClose = window.onclick = function ( event ) {
//     if ( event.target == modal ) {
//         modal.style.display = "none";
//     }
// };
