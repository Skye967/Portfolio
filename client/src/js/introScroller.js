
// const intViewportWidth = window.innerWidth;
// const intViewportHeight = window.innerHeight;
// console.log( "width " + intViewportWidth );
// console.log( "height " + intViewportHeight );



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
    if ( intViewportHeight > 1100 ) {
        bioScroll.style.transform = "translate3d(0, 0, 0)";
        bioScroll.style.opacity = 1;

    }
    const value2 = window.scrollY;
    let num = 0;
    let opaNum = 0;
    if ( value2 < 700 && intViewportHeight < 1100 ) {
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
    const intViewportWidth = window.innerWidth;
    const intViewportHeight = window.innerHeight;
    let opaNum2 = 0;
    //console.log( intViewportWidth );
    console.log( intViewportHeight );
    if ( value3 < 2100 && intViewportHeight < 1100) {
        opaNum2 = ( value3 - 1700 ) / 400;
        projectScroll.style.opacity = opaNum2;
        console.log( value3 );
        // console.log( opaNum2 );
    } 
    if ( value3 < 1600 && intViewportHeight > 1100 && intViewportHeight < 1600 ) {
        opaNum2 = ( value3 - 1200 ) / 400;
        projectScroll.style.opacity = opaNum2;
        console.log( value3 );
        console.log( opaNum2 );
    }
    if ( value3 < 1000 && intViewportHeight > 1600 && intViewportHeight < 2100) {
        opaNum2 = ( value3 - 600 ) / 400;
        projectScroll.style.opacity = opaNum2;
        console.log( value3 );
        console.log( opaNum2 );
    }
    if ( value3 < 600 && intViewportHeight > 2100 ) {
        opaNum2 = ( value3 - 200 ) / 400;
        projectScroll.style.opacity = opaNum2;
        console.log( value3 );
        console.log( opaNum2 );
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
