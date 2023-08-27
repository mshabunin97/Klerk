<template>
    <div class="input-with-button">
        <input v-model="inputValue" class="input" type="email" placeholder="Электронная почта" />
        <button @click=submitForm class="button" type="button">
            {{ buttonText }}
        </button>
    </div>
</template>

<script>
export default {
    name: 'Input',
    emits: ['submitForm'],
    data() {
        return {
            inputValue: '',
            buttonText: '',
            isSubmitting: false
        };
    },
    methods: {
        getButtonText() {
            return window.innerWidth >= 640 ? 'Подписаться' : '>';
        },
        async submitForm() {
            if (this.isSubmitting) {
                return;
            }
            this.isSubmitting = true;

            this.$emit('submitForm', this.inputValue);

            this.inputValue = '';
            const delay = 1500;

            if (window.innerWidth >= 640) {
                this.buttonText = 'Успешно';
            } else {
                this.buttonText = 'Ок';
            }

            await new Promise(resolve => setTimeout(resolve, delay));
            this.buttonText = this.getButtonText();

            this.isSubmitting = false;
        },
        handleResize() {
            this.buttonText = this.getButtonText();
        }
    },
    mounted() {
        this.buttonText = this.getButtonText();
        window.addEventListener('resize', this.handleResize);
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.handleResize);
    }
};
</script>