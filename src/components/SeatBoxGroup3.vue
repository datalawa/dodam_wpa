<template>
    <div class="container">
        <UsingSeat>21</UsingSeat>
        <UsingSeat>22</UsingSeat>
        <UsingSeat>23</UsingSeat>
        <UsingSeat>24</UsingSeat>
        <UsingSeat>25</UsingSeat>
        <UsingSeat>26</UsingSeat>
        <UsingSeat>27</UsingSeat>
        <UsingSeat>28</UsingSeat>
        <UsingSeat>29</UsingSeat>
        <UsingSeat>30</UsingSeat>
    </div>
</template>
<script>
import UsingSeat from '@/components/UsingSeat';
import EmptySeat from './EmptySeat';
import FemaleSeat from './FemaleSeat';
import DisabledSeat from './DisabledSeat';
export default {
    props:{
        number:Number
    },
    components: {UsingSeat,EmptySeat,FemaleSeat,DisabledSeat},
    data() {
    return {
        }
    },
    setup() {},
    created() {},
    unmounted() {},
    methods:{}
}
</script>
<style scoped>
.container{
    height: 140px;
    width: 370px;
    padding: 50px 50px 50px 50px;

    display: inline-flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;   
    align-content: flex-start;  
}
</style>