const WordRoots = [
  // ========== 基础语法 ==========
  {
    id: 1,
    root: "变量与赋值",
    origin: "基础语法",
    meaning: "用变量名存储数据，赋值运算符 = 将值绑定到变量",
    description: "变量是编程的基础单元，Python中无需声明类型，直接赋值即可创建变量。变量名遵循蛇形命名法（snake_case），由字母、数字和下划线组成，不能以数字开头。Python是动态类型语言，变量的类型由所赋的值决定，且可以随时改变。理解变量与赋值是学习任何编程语言的第一步。",
    examples: [
      {
        word: "基本赋值",
        meaning: "将值存储到变量中",
        breakdown: { root: "变量与赋值" },
        explanation: "name = 'Python' 将字符串赋给变量name；age = 30 将整数赋给变量age。等号左边是变量名，右边是值。"
      },
      {
        word: "多重赋值",
        meaning: "同时给多个变量赋值",
        breakdown: { root: "变量与赋值" },
        explanation: "x, y, z = 1, 2, 3 一行代码同时给三个变量赋不同值；a = b = c = 0 三个变量赋相同值。"
      },
      {
        word: "变量交换",
        meaning: "无需临时变量交换两个值",
        breakdown: { root: "变量与赋值" },
        explanation: "a, b = b, a 是Python特有的优雅写法，无需像其他语言那样借助临时变量 tmp = a; a = b; b = tmp。"
      }
    ],
    quiz: {
      question: "以下哪个变量名是合法的？",
      options: ["2name", "my-name", "_score", "class"],
      correctAnswer: 2
    }
  },
  {
    id: 2,
    root: "数据类型",
    origin: "基础语法",
    meaning: "Python内置的核心数据类型：整数、浮点数、字符串、布尔值",
    description: "Python有四大基本数据类型：int（整数）、float（浮点数）、str（字符串）和bool（布尔值）。整数没有大小限制，浮点数遵循IEEE 754标准。字符串可用单引号或双引号创建，布尔值只有True和False。使用type()函数可以查看任何值的类型，使用int()、float()、str()、bool()可以进行类型转换。",
    examples: [
      {
        word: "整数与浮点数",
        meaning: "数值类型的使用",
        breakdown: { root: "数据类型" },
        explanation: "x = 42 是整数；y = 3.14 是浮点数；z = 1 + 2j 是复数。Python整数无上限，大数计算无精度损失。"
      },
      {
        word: "字符串",
        meaning: "文本数据的表示",
        breakdown: { root: "数据类型" },
        explanation: "s1 = 'hello' 或 s2 = \"world\"；三引号 s3 = '''多行文本''' 支持换行。字符串是不可变序列。"
      },
      {
        word: "布尔值",
        meaning: "真与假的逻辑值",
        breakdown: { root: "数据类型" },
        explanation: "is_valid = True; is_empty = False。0、空字符串、空列表等会被视为False，非空非零为True。"
      }
    ],
    quiz: {
      question: "type(3.14) 的返回值是什么？",
      options: ["<class 'int'>", "<class 'float'>", "<class 'str'>", "<class 'number'>"],
      correctAnswer: 1
    }
  },
  {
    id: 3,
    root: "运算符",
    origin: "基础语法",
    meaning: "算术、比较、逻辑、赋值运算符，构建表达式的基础",
    description: "Python运算符分为四大类：算术运算符（+、-、*、/、//、%、**）用于数值计算；比较运算符（==、!=、>、<、>=、<=）返回布尔值；逻辑运算符（and、or、not）用于条件组合；赋值运算符（=、+=、-=等）简化赋值操作。特别注意：/ 是真除法（返回浮点数），// 是整除，** 是幂运算。Python还支持海象运算符 := 在表达式中赋值。",
    examples: [
      {
        word: "算术运算",
        meaning: "数学计算",
        breakdown: { root: "运算符" },
        explanation: "10 / 3 = 3.333（真除法）；10 // 3 = 3（整除）；10 % 3 = 1（取模）；2 ** 10 = 1024（幂运算）。"
      },
      {
        word: "比较与逻辑",
        meaning: "条件判断",
        breakdown: { root: "运算符" },
        explanation: "5 > 3 为True；'a' == 'a' 为True；True and False 为False；not True 为False。支持链式比较：1 < x < 10。"
      },
      {
        word: "复合赋值",
        meaning: "简化赋值语句",
        breakdown: { root: "运算符" },
        explanation: "count += 1 等同于 count = count + 1；total -= 5 等同于 total = total - 5。所有算术运算符都有对应复合形式。"
      }
    ],
    quiz: {
      question: "9 // 2 的结果是什么？",
      options: ["4.5", "4", "5", "4.0"],
      correctAnswer: 1
    }
  },
  {
    id: 4,
    root: "字符串操作",
    origin: "基础语法",
    meaning: "字符串的索引、切片、格式化与常用方法",
    description: "字符串是Python中最常用的数据类型之一。支持索引访问（s[0]）和切片操作（s[1:4]）。f-string是Python 3.6+引入的格式化语法，用 f'...' 在字符串中嵌入表达式。常用方法包括：split()分割、join()合并、strip()去空白、replace()替换、find()查找、upper()/lower()大小写转换。字符串是不可变的，所有操作都返回新字符串。",
    examples: [
      {
        word: "f-string格式化",
        meaning: "现代字符串格式化",
        breakdown: { root: "字符串操作" },
        explanation: "name = 'World'; print(f'Hello, {name}!')。支持表达式：f'{2 + 3}' 结果为 '5'；f'{pi:.2f}' 保留两位小数。"
      },
      {
        word: "切片操作",
        meaning: "提取子字符串",
        breakdown: { root: "字符串操作" },
        explanation: "s = 'Python'; s[0:3] = 'Pyt'（左闭右开）；s[-1] = 'n'（负索引）；s[::-1] = 'nohtyP'（反转）。"
      },
      {
        word: "常用方法",
        meaning: "字符串处理工具",
        breakdown: { root: "字符串操作" },
        explanation: "'a,b,c'.split(',') → ['a','b','c']；','.join(['a','b']) → 'a,b'；'  hi  '.strip() → 'hi'。"
      }
    ],
    quiz: {
      question: "'Python'[1:4] 的结果是什么？",
      options: ["Pyt", "yth", "ytho", "Pyth"],
      correctAnswer: 1
    }
  },
  {
    id: 5,
    root: "列表与元组",
    origin: "基础语法",
    meaning: "有序序列容器：列表可变，元组不可变",
    description: "列表（list）和元组（tuple）都是有序序列。列表用方括号 [1, 2, 3] 创建，支持增删改（append、insert、remove、pop）；元组用圆括号 (1, 2, 3) 创建，创建后不可修改。列表适合需要动态修改的场景，元组适合固定数据（如坐标、配置）且性能更优。两者都支持索引、切片、迭代和in运算。",
    examples: [
      {
        word: "列表操作",
        meaning: "动态增删改",
        breakdown: { root: "列表与元组" },
        explanation: "fruits = ['apple', 'banana']; fruits.append('cherry'); fruits.insert(0, 'avocado'); fruits.remove('banana'); last = fruits.pop()。"
      },
      {
        word: "列表推导式",
        meaning: "简洁创建列表",
        breakdown: { root: "列表与元组" },
        explanation: "[x**2 for x in range(10)] 生成0-9的平方；[x for x in nums if x > 0] 过滤正数。一行代码替代多行循环。"
      },
      {
        word: "元组解包",
        meaning: "拆开元组赋值",
        breakdown: { root: "列表与元组" },
        explanation: "point = (3, 4); x, y = point; 元组作为字典键、函数多返回值：return x, y 实际返回元组。"
      }
    ],
    quiz: {
      question: "以下哪个操作会报错？",
      options: ["[1,2].append(3)", "(1,2).index(1)", "(1,2)[0] = 3", "len((1,2))"],
      correctAnswer: 2
    }
  },
  {
    id: 6,
    root: "字典与集合",
    origin: "基础语法",
    meaning: "键值对映射和无序唯一集合",
    description: "字典（dict）用花括号 {'name': 'Tom', 'age': 20} 创建，通过键快速查找值，时间复杂度O(1)。常用方法：get()安全取值、keys()/values()/items()遍历、update()合并。集合（set）用花括号 {1, 2, 3} 创建（注意空集合用set()），元素唯一且无序，支持交集(&)、并集(|)、差集(-)运算。字典推导式和集合推导式也是常用技巧。",
    examples: [
      {
        word: "字典操作",
        meaning: "键值对存取",
        breakdown: { root: "字典与集合" },
        explanation: "user = {'name': 'Tom', 'age': 20}; user['name'] 取值；user.get('email', 'N/A') 安全取值；user['email'] = 'a@b.com' 添加。"
      },
      {
        word: "集合运算",
        meaning: "去重与集合操作",
        breakdown: { root: "字典与集合" },
        explanation: "a = {1,2,3}; b = {3,4,5}; a & b → {3}(交集); a | b → {1,2,3,4,5}(并集); a - b → {1,2}(差集)。"
      },
      {
        word: "推导式",
        meaning: "简洁创建字典和集合",
        breakdown: { root: "字典与集合" },
        explanation: "{k: v for k, v in pairs} 字典推导式；{x for x in nums if x > 0} 集合推导式。列表/字典/集合三种推导式语法一致。"
      }
    ],
    quiz: {
      question: "创建一个空集合应该用什么语法？",
      options: ["{}", "set()", "[]", "()"],
      correctAnswer: 1
    }
  },
  {
    id: 7,
    root: "条件判断",
    origin: "基础语法",
    meaning: "if/elif/else 分支控制，根据条件执行不同代码",
    description: "Python使用if/elif/else进行条件判断，用缩进（4空格）表示代码块，无需花括号。条件表达式不需要括号。elif替代else if，更简洁。支持三元表达式 value_if_true if condition else value_if_false。条件可以是任何能转换为布尔值的对象（真值测试）。match/case是Python 3.10+引入的模式匹配，类似其他语言的switch。",
    examples: [
      {
        word: "基础分支",
        meaning: "if/elif/else结构",
        breakdown: { root: "条件判断" },
        explanation: "if score >= 90: grade = 'A' elif score >= 80: grade = 'B' elif score >= 60: grade = 'C' else: grade = 'D'"
      },
      {
        word: "三元表达式",
        meaning: "单行条件赋值",
        breakdown: { root: "条件判断" },
        explanation: "status = '成年' if age >= 18 else '未成年'。简洁的条件赋值，适合简单二选一场景。"
      },
      {
        word: "真值测试",
        meaning: "非布尔值的条件判断",
        breakdown: { root: "条件判断" },
        explanation: "if my_list: 等价于 if len(my_list) > 0；if name: 等价于 if name != ''。None、0、空容器、空字符串均为False。"
      }
    ],
    quiz: {
      question: "Python中用什么表示代码块？",
      options: ["花括号 {}", "圆括号 ()", "缩进", "begin/end"],
      correctAnswer: 2
    }
  },
  {
    id: 8,
    root: "循环控制",
    origin: "基础语法",
    meaning: "for遍历序列和while条件循环，break/continue控制流程",
    description: "for循环用于遍历可迭代对象（列表、字符串、range等），while循环根据条件重复执行。range(start, stop, step)生成整数序列，是for循环的常用搭档。break立即退出整个循环，continue跳过当前迭代进入下一次。for/else结构中，else在循环正常结束时执行（未被break中断）。enumerate()同时获取索引和值，zip()并行遍历多个序列。",
    examples: [
      {
        word: "for循环",
        meaning: "遍历序列",
        breakdown: { root: "循环控制" },
        explanation: "for i in range(5): print(i) 输出0到4；for name in names: 遍历列表；for i, v in enumerate(lst): 带索引遍历。"
      },
      {
        word: "while循环",
        meaning: "条件循环",
        breakdown: { root: "循环控制" },
        explanation: "while count > 0: 满足条件时持续执行；需确保条件最终为False，否则无限循环。while True: 配合break使用。"
      },
      {
        word: "break与continue",
        meaning: "流程控制",
        breakdown: { root: "循环控制" },
        explanation: "break立即退出循环：if item == target: break；continue跳过本次：if item < 0: continue。for...else中break会跳过else。"
      }
    ],
    quiz: {
      question: "range(1, 10, 3) 生成的序列是？",
      options: ["[1, 4, 7]", "[1, 4, 7, 10]", "[1, 3, 6, 9]", "[0, 3, 6, 9]"],
      correctAnswer: 0
    }
  },
  // ========== 函数 ==========
  {
    id: 9,
    root: "函数定义",
    origin: "函数",
    meaning: "用def关键字定义可复用的代码块",
    description: "函数是代码复用的基本单位。用def关键字定义，后跟函数名和参数列表。函数体用缩进表示，用return语句返回结果。没有return的函数默认返回None。函数名遵循蛇形命名法。好的函数应该单一职责、命名清晰、长度适中（通常不超过20行）。函数定义必须在调用之前（或通过if __name__保护）。",
    examples: [
      {
        word: "基础函数",
        meaning: "定义与调用",
        breakdown: { root: "函数定义" },
        explanation: "def greet(name): return f'Hello, {name}!'。调用：msg = greet('Python')。函数是一等公民，可赋值给变量。"
      },
      {
        word: "多返回值",
        meaning: "返回多个结果",
        breakdown: { root: "函数定义" },
        explanation: "def divide(a, b): return a // b, a % b。quotient, remainder = divide(10, 3)。实际返回元组，通过解包接收。"
      },
      {
        word: "文档字符串",
        meaning: "函数说明文档",
        breakdown: { root: "函数定义" },
        explanation: "def func(): '''这是文档字符串'''。用三引号写在函数体首行。help(func)可查看；__doc__属性访问。"
      }
    ],
    quiz: {
      question: "没有return语句的函数返回什么？",
      options: ["0", "空字符串", "None", "报错"],
      correctAnswer: 2
    }
  },
  {
    id: 10,
    root: "参数与默认值",
    origin: "函数",
    meaning: "位置参数、关键字参数、默认参数值与可变参数",
    description: "Python函数参数灵活强大：位置参数按顺序传递；关键字参数按名称传递（func(name='Tom')）；默认参数值在定义时指定（def f(x, y=10)）。*args收集多余位置参数为元组，**kwargs收集多余关键字参数为字典。参数顺序规则：位置参数 → 默认参数 → *args → 关键字参数 → **kwargs。注意：默认参数不要用可变对象（如空列表），否则会共享状态。",
    examples: [
      {
        word: "默认参数",
        meaning: "参数的默认值",
        breakdown: { root: "参数与默认值" },
        explanation: "def power(base, exp=2): return base ** exp。power(3) → 9（exp默认2）；power(3, 3) → 27。"
      },
      {
        word: "*args和**kwargs",
        meaning: "可变数量参数",
        breakdown: { root: "参数与默认值" },
        explanation: "def total(*nums): return sum(nums)；total(1,2,3) → 6。def config(**opts): print(opts)；config(a=1,b=2) → {'a':1,'b':2}。"
      },
      {
        word: "关键字参数",
        meaning: "按名称传参",
        breakdown: { root: "参数与默认值" },
        explanation: "def create_user(name, age, role='user'): ...；create_user(name='Tom', age=25, role='admin')。提高可读性，顺序无关。"
      }
    ],
    quiz: {
      question: "def f(a, b=[]): b.append(1); return b 连续调用f()两次，结果是什么？",
      options: ["两次都返回[1]", "先[1]后[1,1]", "报错", "第二次返回[]"],
      correctAnswer: 1
    }
  },
  {
    id: 11,
    root: "Lambda表达式",
    origin: "函数",
    meaning: "匿名函数，用一行表达式定义简单函数",
    description: "Lambda是创建小型匿名函数的语法：lambda 参数: 表达式。只能包含单个表达式，不能有语句（如if语句、赋值）。常与map()、filter()、sorted()等高阶函数配合使用。当函数逻辑简单到一行就能表达时，lambda比def更简洁。但复杂逻辑仍应使用def定义命名函数，可读性更好。Python的lambda比其他语言功能更受限，这是有意为之的设计。",
    examples: [
      {
        word: "基本用法",
        meaning: "定义匿名函数",
        breakdown: { root: "Lambda表达式" },
        explanation: "square = lambda x: x ** 2；square(5) → 25。等价于 def square(x): return x ** 2。"
      },
      {
        word: "配合sorted",
        meaning: "自定义排序",
        breakdown: { root: "Lambda表达式" },
        explanation: "students = [('Tom', 85), ('Jerry', 92)]；sorted(students, key=lambda s: s[1]) 按成绩排序。"
      },
      {
        word: "配合map/filter",
        meaning: "函数式编程",
        breakdown: { root: "Lambda表达式" },
        explanation: "list(map(lambda x: x*2, [1,2,3])) → [2,4,6]；list(filter(lambda x: x>2, [1,2,3])) → [3]。"
      }
    ],
    quiz: {
      question: "lambda x, y: x + y 等价于以下哪个？",
      options: ["def f(x,y): x+y", "def f(x,y): return x+y", "def f(x+y): return x+y", "function(x,y){return x+y}"],
      correctAnswer: 1
    }
  },
  {
    id: 12,
    root: "作用域与闭包",
    origin: "函数",
    meaning: "变量的可见范围（LEGB规则）和闭包机制",
    description: "Python使用LEGB规则查找变量：Local → Enclosing → Global → Built-in。函数内部可读取外部变量，但修改需用global或nonlocal声明。闭包是指内部函数引用了外部函数的变量，且外部函数已返回，这些变量仍被内部函数保留。闭包常用于创建工厂函数、实现装饰器、保持状态而不使用类。理解作用域是避免bug的关键。",
    examples: [
      {
        word: "LEGB规则",
        meaning: "变量查找顺序",
        breakdown: { root: "作用域与闭包" },
        explanation: "x = 'global'; def f(): x = 'local'; print(x)。调用f()输出'local'（Local优先）。函数内无x则找Enclosing→Global→Built-in。"
      },
      {
        word: "global与nonlocal",
        meaning: "修改外层变量",
        breakdown: { root: "作用域与闭包" },
        explanation: "count = 0; def inc(): global count; count += 1。nonlocal用于嵌套函数修改外层函数变量。"
      },
      {
        word: "闭包",
        meaning: "函数记住外层状态",
        breakdown: { root: "作用域与闭包" },
        explanation: "def multiplier(n): return lambda x: x * n；double = multiplier(2)；double(5) → 10。内部lambda记住了n=2。"
      }
    ],
    quiz: {
      question: "在函数内部修改全局变量需要使用哪个关键字？",
      options: ["local", "global", "nonlocal", "extern"],
      correctAnswer: 1
    }
  },
  {
    id: 13,
    root: "装饰器",
    origin: "函数",
    meaning: "用@语法在不修改函数代码的情况下增强功能",
    description: "装饰器是Python的高级特性，本质是一个接受函数并返回新函数的高阶函数。用@decorator语法糖简化调用。常见用途：日志记录、权限检查、缓存、计时。装饰器基于闭包实现，可以叠加使用（从下到上执行）。functools.wraps用于保留原函数的元信息（名称、文档字符串等）。类也可以作为装饰器，实现更复杂的状态管理。",
    examples: [
      {
        word: "基础装饰器",
        meaning: "函数增强",
        breakdown: { root: "装饰器" },
        explanation: "def timer(func): def wrapper(*args): start = time.time(); result = func(*args); print(f'{func.__name__}: {time.time()-start:.3f}s'); return result; return wrapper。@timer加在函数定义上方。"
      },
      {
        word: "带参数装饰器",
        meaning: "可配置的装饰器",
        breakdown: { root: "装饰器" },
        explanation: "def repeat(n): def decorator(func): def wrapper(*args): for _ in range(n): func(*args); return wrapper; return decorator。@repeat(3)执行3次。"
      },
      {
        word: "functools.wraps",
        meaning: "保留函数元信息",
        breakdown: { root: "装饰器" },
        explanation: "from functools import wraps; 在wrapper上加@wraps(func)，保留原函数的__name__和__doc__，避免调试时看到统一的'wrapper'名称。"
      }
    ],
    quiz: {
      question: "装饰器 @timer 等价于以下哪个操作？",
      options: ["timer = func", "func = timer(func)", "timer(func())", "func(timer)"],
      correctAnswer: 1
    }
  },
  // ========== 模块 ==========
  {
    id: 14,
    root: "模块与import",
    origin: "模块",
    meaning: "用import导入模块，组织代码为可复用的单元",
    description: "模块是Python代码组织的基本单位，一个.py文件就是一个模块。import语句有四种形式：import module、import module as alias、from module import name、from module import *。推荐使用前三种，避免星号导入污染命名空间。模块被导入时只会执行一次（后续导入使用缓存）。__name__变量在模块被直接运行时为'__main__'，被导入时为模块名。",
    examples: [
      {
        word: "import语句",
        meaning: "导入模块的方式",
        breakdown: { root: "模块与import" },
        explanation: "import math; math.sqrt(16) → 4.0。import numpy as np; np.array([1,2]) 起别名。from os import path; path.exists('file') 导入特定对象。"
      },
      {
        word: "__name__守卫",
        meaning: "区分直接运行与导入",
        breakdown: { root: "模块与import" },
        explanation: "if __name__ == '__main__': main()。直接运行python my_module.py时执行main()，被其他文件import时不执行。"
      },
      {
        word: "相对导入",
        meaning: "包内部的导入",
        breakdown: { root: "模块与import" },
        explanation: "from . import sibling 同级模块；from .. import parent 上级模块。仅在包内使用，主脚本中不可用。"
      }
    ],
    quiz: {
      question: "当模块被直接运行时，__name__的值是什么？",
      options: ["模块的文件名", "'__main__'", "'__module__'", "None"],
      correctAnswer: 1
    }
  },
  {
    id: 15,
    root: "标准库概览",
    origin: "模块",
    meaning: "Python内置的常用标准库模块",
    description: "Python自带丰富的标准库，无需安装即可使用。核心模块包括：os（操作系统接口）、sys（系统参数）、json（JSON处理）、datetime（日期时间）、re（正则表达式）、collections（高级容器）、pathlib（路径操作）、logging（日志记录）、unittest（单元测试）。标准库是Python'开箱即用'理念的体现，优先使用标准库可以减少外部依赖。",
    examples: [
      {
        word: "os与pathlib",
        meaning: "文件与路径操作",
        breakdown: { root: "标准库概览" },
        explanation: "import os; os.listdir('.') 列出目录。from pathlib import Path; Path('file').exists() 检查文件。pathlib是面向对象的现代路径库。"
      },
      {
        word: "json处理",
        meaning: "JSON序列化与反序列化",
        breakdown: { root: "标准库概览" },
        explanation: "import json; json.dumps({'a': 1}) → '{\"a\": 1}'（序列化）；json.loads('{\"a\":1}') → {'a': 1}（反序列化）。"
      },
      {
        word: "datetime",
        meaning: "日期时间处理",
        breakdown: { root: "标准库概览" },
        explanation: "from datetime import datetime, timedelta; now = datetime.now(); tomorrow = now + timedelta(days=1)。处理时间和日期的标准方式。"
      }
    ],
    quiz: {
      question: "以下哪个不属于Python标准库？",
      options: ["json", "os", "numpy", "re"],
      correctAnswer: 2
    }
  },
  {
    id: 16,
    root: "包与pip",
    origin: "模块",
    meaning: "用包组织多模块项目，用pip管理第三方依赖",
    description: "包（package）是包含__init__.py的目录，用于组织多个相关模块。pip是Python的包管理器，从PyPI安装第三方库：pip install package_name。requirements.txt记录项目依赖，pip install -r requirements.txt一键安装。虚拟环境（venv）隔离项目依赖，避免版本冲突。pip list查看已安装包，pip show查看包详情，pip uninstall卸载包。",
    examples: [
      {
        word: "创建包",
        meaning: "组织多模块",
        breakdown: { root: "包与pip" },
        explanation: "mypackage/ 目录下放 __init__.py 和多个模块文件。__init__.py 可以为空或定义包的公共接口。from mypackage import module。"
      },
      {
        word: "pip常用命令",
        meaning: "包的安装与管理",
        breakdown: { root: "包与pip" },
        explanation: "pip install requests 安装；pip install requests==2.28.0 指定版本；pip install -r requirements.txt 批量安装；pip list 列出已安装。"
      },
      {
        word: "虚拟环境",
        meaning: "隔离项目依赖",
        breakdown: { root: "包与pip" },
        explanation: "python -m venv myenv 创建；myenv\\Scripts\\activate 激活（Windows）；source myenv/bin/activate（Linux/Mac）。隔离不同项目的依赖版本。"
      }
    ],
    quiz: {
      question: "创建Python包需要在目录中放置什么文件？",
      options: ["main.py", "__init__.py", "setup.py", "package.json"],
      correctAnswer: 1
    }
  },
  {
    id: 17,
    root: "文件读写",
    origin: "模块",
    meaning: "用open()函数读写文件，with语句自动管理资源",
    description: "Python用内置open()函数操作文件：open('file.txt', 'r')读取、'w'写入（覆盖）、'a'追加、'rb'二进制读取。with语句（上下文管理器）自动关闭文件，即使发生异常也不会泄露资源。读取方法：read()全部读取、readline()逐行、readlines()读为列表。写入方法：write()写字符串、writelines()写列表。推荐使用pathlib的Path对象进行路径操作。",
    examples: [
      {
        word: "with语句",
        meaning: "自动关闭文件",
        breakdown: { root: "文件读写" },
        explanation: "with open('data.txt', 'r') as f: content = f.read()。with块结束后文件自动关闭，无需手动f.close()。"
      },
      {
        word: "逐行读取",
        meaning: "处理大文件",
        breakdown: { root: "文件读写" },
        explanation: "with open('big.log') as f: for line in f: process(line)。逐行迭代，内存友好，适合处理大文件。"
      },
      {
        word: "CSV与JSON",
        meaning: "结构化数据读写",
        breakdown: { root: "文件读写" },
        explanation: "import csv; csv.reader(f) 读取CSV。import json; json.dump(data, f) 写入JSON；json.load(f) 读取JSON。"
      }
    ],
    quiz: {
      question: "open('file.txt', 'a') 的模式是什么？",
      options: ["读取", "写入（覆盖）", "追加", "二进制读取"],
      correctAnswer: 2
    }
  },
  // ========== 实战案例 ==========
  {
    id: 18,
    root: "异常处理",
    origin: "实战案例",
    meaning: "用try/except捕获异常，让程序健壮运行",
    description: "异常处理是编写健壮程序的关键。try块放可能出错的代码，except块处理异常，else块在无异常时执行，finally块无论如何都执行。可以捕获特定异常类型（ValueError、FileNotFoundError等），避免裸except。raise主动抛出异常，自定义异常类继承Exception。常见异常：TypeError、ValueError、KeyError、IndexError、AttributeError。",
    examples: [
      {
        word: "try/except",
        meaning: "捕获异常",
        breakdown: { root: "异常处理" },
        explanation: "try: result = 10 / 0 except ZeroDivisionError: print('除数不能为零')。指定异常类型，不要裸except。"
      },
      {
        word: "else与finally",
        meaning: "完整异常结构",
        breakdown: { root: "异常处理" },
        explanation: "try: f = open('file') except FileNotFoundError: print('文件不存在') else: print(f.read()) finally: f.close()。else在无异常时执行，finally始终执行。"
      },
      {
        word: "raise与自定义异常",
        meaning: "主动抛出异常",
        breakdown: { root: "异常处理" },
        explanation: "if age < 0: raise ValueError('年龄不能为负')。class MyError(Exception): pass 自定义异常类。"
      }
    ],
    quiz: {
      question: "finally块的代码什么时候执行？",
      options: ["只在异常时", "只在无异常时", "始终执行", "只在return前"],
      correctAnswer: 2
    }
  },
  {
    id: 19,
    root: "面向对象基础",
    origin: "实战案例",
    meaning: "用class定义类，封装数据与行为",
    description: "类是面向对象编程的核心。用class关键字定义，__init__方法初始化实例。self代表实例本身，访问属性和方法通过self。类属性属于类本身（所有实例共享），实例属性属于各实例（独立存储）。方法分为实例方法（第一个参数self）、类方法（@classmethod，参数cls）、静态方法（@staticmethod，无特殊参数）。继承用class Child(Parent)语法，子类可重写父类方法。",
    examples: [
      {
        word: "定义类",
        meaning: "封装数据与行为",
        breakdown: { root: "面向对象基础" },
        explanation: "class Dog: def __init__(self, name): self.name = name; def bark(self): return f'{self.name}: Woof!'。dog = Dog('Rex'); dog.bark()。"
      },
      {
        word: "继承",
        meaning: "代码复用与扩展",
        breakdown: { root: "面向对象基础" },
        explanation: "class GuideDog(Dog): def __init__(self, name, owner): super().__init__(name); self.owner = owner。super()调用父类方法。"
      },
      {
        word: "特殊方法",
        meaning: "运算符重载",
        breakdown: { root: "面向对象基础" },
        explanation: "__str__定义print输出；__len__支持len()；__eq__支持==比较；__repr__定义开发者友好的字符串表示。"
      }
    ],
    quiz: {
      question: "Python类中__init__方法的作用是什么？",
      options: ["销毁对象", "初始化实例", "定义类属性", "创建类"],
      correctAnswer: 1
    }
  },
  {
    id: 20,
    root: "列表推导式进阶",
    origin: "实战案例",
    meaning: "用推导式优雅地创建列表、字典和集合",
    description: "推导式是Python最具特色的语法之一，将循环和条件浓缩为一行表达式。基本形式：[expression for item in iterable if condition]。嵌套推导式处理多维数据：[[f(x) for x in row] for row in matrix]。字典推导式：{k: v for k, v in items}。集合推导式：{x for x in data}。生成器表达式用圆括号，惰性求值节省内存。推导式虽简洁，但过度嵌套会降低可读性，建议最多一层嵌套。",
    examples: [
      {
        word: "条件过滤",
        meaning: "带if的推导式",
        breakdown: { root: "列表推导式进阶" },
        explanation: "evens = [x for x in range(100) if x % 2 == 0]。先遍历range(100)，再过滤偶数，x加入结果列表。"
      },
      {
        word: "嵌套推导",
        meaning: "处理多维数据",
        breakdown: { root: "列表推导式进阶" },
        explanation: "flat = [x for row in matrix for x in row] 展平二维列表。理解顺序：从左到右对应从外到内的循环。"
      },
      {
        word: "生成器表达式",
        meaning: "惰性求值",
        breakdown: { root: "列表推导式进阶" },
        explanation: "total = sum(x**2 for x in range(1000000))。圆括号生成器不预先生成列表，逐个计算，节省内存。"
      }
    ],
    quiz: {
      question: "[x*2 for x in range(3)] 的结果是什么？",
      options: ["[0, 1, 2]", "[2, 4, 6]", "[0, 2, 4]", "[1, 2, 3]"],
      correctAnswer: 2
    }
  },
  {
    id: 21,
    root: "迭代器与生成器",
    origin: "实战案例",
    meaning: "用yield创建生成器函数，实现惰性计算",
    description: "迭代器是实现了__iter__和__next__方法的对象，可以逐个产出值。生成器是创建迭代器的简便方式：在函数中使用yield代替return，函数变为生成器函数。每次调用next()执行到yield暂停，下次继续。生成器节省内存（不预存所有值），适合处理大数据流。yield from可以委托给子生成器。生成器还可实现协程（send()方法）。",
    examples: [
      {
        word: "yield关键字",
        meaning: "创建生成器函数",
        breakdown: { root: "迭代器与生成器" },
        explanation: "def countdown(n): while n > 0: yield n; n -= 1。for i in countdown(5): print(i) 输出5,4,3,2,1。yield暂停函数，保留状态。"
      },
      {
        word: "生成器表达式",
        meaning: "简洁的惰性序列",
        breakdown: { root: "迭代器与生成器" },
        explanation: "gen = (x**2 for x in range(1000000))。圆括号创建生成器，不占大内存。next(gen)获取下一个值。"
      },
      {
        word: "yield from",
        meaning: "委托子生成器",
        breakdown: { root: "迭代器与生成器" },
        explanation: "def chain(*iterables): for it in iterables: yield from it。将多个可迭代对象串联为一个生成器。yield from取代了for + yield的模式。"
      }
    ],
    quiz: {
      question: "生成器函数与普通函数的区别是什么？",
      options: ["没有区别", "用yield代替return", "不能有参数", "只能返回数字"],
      correctAnswer: 1
    }
  },
  {
    id: 22,
    root: "正则表达式",
    origin: "实战案例",
    meaning: "用re模块进行模式匹配与文本处理",
    description: "正则表达式是强大的文本匹配工具。Python通过re模块提供支持：re.search()搜索第一个匹配、re.match()从开头匹配、re.findall()找所有匹配、re.sub()替换。常用模式：\\d数字、\\w字母数字、\\s空白、.任意字符、*零或多、+一或多、?零或一。原始字符串r''避免转义问题。re.compile()预编译提升性能。分组用()，命名分组(?P<name>...)。",
    examples: [
      {
        word: "基础匹配",
        meaning: "查找模式",
        breakdown: { root: "正则表达式" },
        explanation: "import re; re.findall(r'\\d+', 'a1b22c333') → ['1','22','333']。re.search(r'\\w+@\\w+\\.\\w+', 'email: a@b.com') 匹配邮箱。"
      },
      {
        word: "替换与分割",
        meaning: "文本处理",
        breakdown: { root: "正则表达式" },
        explanation: "re.sub(r'\\d+', 'N', 'a1b2c3') → 'aNbNcN' 替换数字。re.split(r'[,;]', 'a,b;c') → ['a','b','c'] 多分隔符分割。"
      },
      {
        word: "分组捕获",
        meaning: "提取匹配内容",
        breakdown: { root: "正则表达式" },
        explanation: "m = re.search(r'(\\d{4})-(\\d{2})-(\\d{2})', '2025-01-15'); m.group(1) → '2025'。命名：(?P<year>\\d{4})。"
      }
    ],
    quiz: {
      question: "r'\\d+' 匹配的是什么？",
      options: ["字母", "一个或多个数字", "一个数字", "空白字符"],
      correctAnswer: 1
    }
  },
  {
    id: 23,
    root: "上下文管理器",
    origin: "实战案例",
    meaning: "用with语句管理资源，确保正确获取与释放",
    description: "上下文管理器定义了资源的获取与释放逻辑，确保即使在异常情况下也能正确清理。两种实现方式：类方式（__enter__和__exit__方法）和生成器方式（@contextmanager装饰器）。with语句自动调用__enter__获取资源、__exit__释放资源。常见场景：文件操作、数据库连接、线程锁。contextlib模块提供工具简化上下文管理器的创建。",
    examples: [
      {
        word: "with语句",
        meaning: "自动资源管理",
        breakdown: { root: "上下文管理器" },
        explanation: "with open('file.txt') as f: data = f.read()。无论是否异常，文件都会被正确关闭。等价于try/finally的简写。"
      },
      {
        word: "@contextmanager",
        meaning: "生成器方式创建",
        breakdown: { root: "上下文管理器" },
        explanation: "from contextlib import contextmanager; @contextmanager; def timer(): start=time.time(); yield; print(time.time()-start)。with timer(): do_work()。"
      },
      {
        word: "类方式实现",
        meaning: "完整的上下文管理器",
        breakdown: { root: "上下文管理器" },
        explanation: "class ManagedResource: def __enter__(self): acquire(); return self; def __exit__(self, *exc): release()。with ManagedResource() as r: use(r)。"
      }
    ],
    quiz: {
      question: "上下文管理器需要实现哪两个特殊方法？",
      options: ["__init__和__del__", "__enter__和__exit__", "__open__和__close__", "__start__和__end__"],
      correctAnswer: 1
    }
  },
  {
    id: 24,
    root: "错误调试技巧",
    origin: "实战案例",
    meaning: "用print、logging、pdb和类型提示高效定位bug",
    description: "调试是程序员的核心技能。基础方法：print()快速输出、type()检查类型、dir()查看属性。进阶方法：logging模块替代print（支持级别和输出到文件）、pdb交互式调试器（breakpoint()进入、n下一步、c继续、p打印）。Python 3.5+的类型提示（Type Hints）可以在编写时就发现类型错误，配合mypy静态检查工具。assert语句在开发阶段验证假设。",
    examples: [
      {
        word: "logging模块",
        meaning: "规范的日志记录",
        breakdown: { root: "错误调试技巧" },
        explanation: "import logging; logging.basicConfig(level=logging.INFO); logging.info('处理中'); logging.error('出错:%s', err)。比print更专业：有级别、可输出到文件。"
      },
      {
        word: "pdb调试器",
        meaning: "交互式调试",
        breakdown: { root: "错误调试技巧" },
        explanation: "在代码中插入breakpoint()（Python 3.7+），运行时暂停进入调试器。n下一行、s进入函数、c继续运行、p variable打印变量。"
      },
      {
        word: "类型提示",
        meaning: "静态类型检查",
        breakdown: { root: "错误调试技巧" },
        explanation: "def greet(name: str) -> str: return f'Hello, {name}'。配合mypy工具在运行前检查类型错误：mypy my_script.py。"
      }
    ],
    quiz: {
      question: "Python 3.7+中，在代码中插入什么可以启动调试器？",
      options: ["debug()", "breakpoint()", "pdb()", "stop()"],
      correctAnswer: 1
    }
  },
  {
    id: 25,
    root: "项目实战：待办清单",
    origin: "实战案例",
    meaning: "综合运用所学知识构建完整的命令行应用",
    description: "将前面学到的所有知识综合运用，构建一个功能完整的命令行待办清单应用。涉及的知识点：函数定义与参数、文件读写（JSON持久化）、异常处理、类与面向对象、模块化组织。功能包括：添加任务、查看列表、标记完成、删除任务、数据持久化。这个项目是学习Python后的第一个里程碑，串联了所有核心概念。",
    examples: [
      {
        word: "数据模型",
        meaning: "用类封装任务",
        breakdown: { root: "项目实战：待办清单" },
        explanation: "class Task: def __init__(self, title, done=False): self.title = title; self.done = done; def toggle(self): self.done = not self.done。面向对象封装数据与行为。"
      },
      {
        word: "持久化存储",
        meaning: "JSON文件读写",
        breakdown: { root: "项目实战：待办清单" },
        explanation: "import json; def save(tasks): with open('tasks.json','w') as f: json.dump([t.__dict__ for t in tasks], f)。def load(): 读取并恢复Task对象。"
      },
      {
        word: "命令行交互",
        meaning: "用户输入与菜单",
        breakdown: { root: "项目实战：待办清单" },
        explanation: "while True: choice = input('1.添加 2.查看 3.完成 4.删除 5.退出: '); if choice == '1': ... elif choice == '5': break。用循环和条件构建交互。"
      }
    ],
    quiz: {
      question: "在这个待办清单项目中，用哪个标准库模块实现数据持久化？",
      options: ["os", "pickle", "json", "csv"],
      correctAnswer: 2
    }
  }
];
