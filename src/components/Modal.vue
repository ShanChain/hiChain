<template>
    <div class="modal-backdrop" @click="close" v-show="mdShow">
        <div class="modal" @click.stop>
            <div class="modal-header">
                <button type="button" class="btn-close" @click="close">x</button>
            </div>
            <div class="title">
                <slot name="title"></slot>
            </div>
            <div class="modal-body">
                <slot name="message"></slot>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Modal',
        props: ['mdShow'],
        data () {
            return {
            }
        },
        methods: {
            close: function () {
                this.$emit('close');
            }
        }
    }
</script>
<style scoped>
    .modal-backdrop {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(134, 140, 147, 0.43);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index:30;
    }
    .modal {
        background-color: #d6cacec9;
        box-shadow: 2px 2px 20px 1px;
        overflow-x:auto;
        display: flex;
        flex-direction: column; 
        width:500px;
    }
    .modal-header,
    .modal-footer {
        padding: 15px;
        display: flex;
    }
    .modal-header {
        color: #4aae9b;
        justify-content: space-between;
        padding:0;
    }
    .modal-footer {
        justify-content: flex-end;
    }
    .modal-body {
        position: relative;
        padding: 20px 10px;
    }
    .btn-close {
        border: none 0;
        font-size: 18px;
        cursor: pointer;
        background-color: transparent;
        position: relative;
        left: 95%;
        padding-top:1%;
    }
    .btn-green {
        color: #fff;
        background-color: #4aae9b;
        border: 1px solid #4aae9b;
        border-radius: 2px;
    }

    
</style>