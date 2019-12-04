$(document).ready( function() {
    function getInputValue() {
        
        $('#somar').click(function () {
            const firstValue = Number($('#first-number').val())
            const secondValue = Number($('#second-number').val())
            
            const somar = firstValue + secondValue;

            $('.result').text(somar)
            
        })

        $('#subtrair').click(function () {
            const firstValue = Number($('#first-number').val())
            const secondValue = Number($('#second-number').val())
            
            const sub = firstValue - secondValue;

            $('.result').text(sub)
            
        })

        $('#dividir').click(function () {
            const firstValue = Number($('#first-number').val())
            const secondValue = Number($('#second-number').val())
            
            const div = firstValue / secondValue;

            $('.result').text(div)
            
        })

        $('#multiplicar').click(function () {
            const firstValue = Number($('#first-number').val())
            const secondValue = Number($('#second-number').val())
            
            const mult = firstValue * secondValue;

            $('.result').text(mult)
            
        })
        
    }
    getInputValue();
}) 

    
