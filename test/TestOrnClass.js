class TestOrnClass {

    constructor(container, shared) {

        this.container = container;

        this.label = shared.label;

        this.data = {
            list: [{
                name: 'External Item a'
            }, {
                name: 'External Item b'
            }, {
                name: 'External Item c'
            }]
        }

    }

    Init() {

        Orn(this.container, this, 'template-default.html')
    }


}