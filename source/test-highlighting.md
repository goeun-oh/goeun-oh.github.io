# Code Highlighting Test

Testing if Prism.js is working properly:

```javascript
function hello() {
    console.log("Hello World!");
    return "success";
}
```

```python
def hello():
    print("Hello World!")
    return "success"
```

```c
int main() {
    printf("Hello World!\n");
    return 0;
}
```

```verilog
module test_module (
    input wire clk,
    input wire rst,
    output reg [7:0] data
);
    always @(posedge clk) begin
        if (rst) begin
            data <= 8'h00;
        end else begin
            data <= data + 1;
        end
    end
endmodule
```

If you can see colors in the code blocks above, Prism.js is working correctly!