const {Tri,Cir,Sqr} = require('./shapes');


describe("Create triangle test", () =>{
    test("will this return text", ()=> {
        const newTri = new Tri('a')

        expect(newTri.text).toEqual('a')
    });
    test("after user inputs will it render a triangle",() => {
        
        const newTri = new Tri('a', 's', 'f');
      
        const svg = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150, 18 244, 182 56, 182" fill="f"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="s" >a</text>
    </svg>`

        expect(newTri.render()).toEqual(svg)
    })
}) 
describe("Create circle test", () =>{
    test("will this return text", () => {
        const newCir = new Cir('a')

        expect(newCir.text).toEqual('a')
    });
    test("after user inputs will it render a circle",() => {
        
        const newCir = new Cir('a', 's', 'f');
      
        const svg = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="f" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="s" >a</text>
        </svg>`

        expect(newCir.render()).toEqual(svg)
    })
}) 
describe("Create square test", () => {
    test("will this return text", () => {
        const newSqr = new Sqr('a');
        
        expect(newSqr.text).toEqual('a');
    });

    test("after user inputs will it render a square", () => {
        const newSqr = new Sqr('ddd', 'blue', 'white');

        const svg = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="90" y="40" width="120" height="120" fill="white" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="blue" >ddd</text>
        </svg>`;

        // Trim the strings to remove any leading/trailing whitespaces or line breaks
        expect(newSqr.render()).toBe(svg);
    });
});


