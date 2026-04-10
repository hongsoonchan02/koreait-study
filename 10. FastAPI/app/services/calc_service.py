class CalcService:

    def calculate(self, a:int, b:int, op:str):
        if op == "+":
            return a + b
        elif op == "-":
            return a - b
        elif op == "*":
            return a * b
        elif op == "/":
            return a / b
