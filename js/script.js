const app = new Vue({
    el: '#root',
    data: {
        counterIndex: 0,
        arrSlider: [
            {
                title: 'Svezia',
                img: '01.jpg',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
            },
            {
                title: 'Svizzera',
                img: '02.jpg',
                text: 'Lorem ipsum',
            },
            {
                title:'Gran Bretagna',
                img: '03.jpg',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
            },
            {
                title:'Germania',
                img: '04.jpg',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam'
            },
            {
                title:'Paradise',
                img: '05.jpg',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam'
            },
        ],
        timer: '',
    },
    methods:{
        next() {
            if (this.counterIndex == this.arrSlider.length - 1) {
                this.counterIndex = 0
            } else {
                this.counterIndex++
            }
        },
        prev() {
            if (this.counterIndex == 0) {
                this.counterIndex = this.arrSlider.length - 1
            } else {
                this.counterIndex--
            }
        },
        startRotation() {
            this.timer = setInterval(this.next, 3000);
        },
        stopRotation(){
            clearInterval(this.timer)
        }
    },
    created() {
        this.startRotation()
    }
})