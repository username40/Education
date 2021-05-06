from time import sleep


# 1.
class TrafficLight:
    __color = ['red', 'yellow', 'green']

    # тут у меня подсветилось что это может быть статический метод я полез гуглить и решил сделать так
    @staticmethod
    def run_traffic_light():
        i = 0
        while i < 3:
            print(f'{TrafficLight.__color[i]}')
            if i == 0:
                sleep(7)
            elif i == 1:
                sleep(2)
            elif i == 2:
                sleep(5)
            i += 1


traffic_light = TrafficLight()
traffic_light.run_traffic_light()


# 3.
class Worker:
    def __init__(self, name, surname, position, wage, bonus):
        self.name = name
        self.surname = surname
        self.position = position
        self._income = {"wage": wage, "bonus": bonus}


class Position(Worker):
    def __init__(self, name, surname, position, wage, bonus):
        super().__init__(name, surname, position, wage, bonus)

    def get_full_name(self):
        return self.name + ' ' + self.surname

    def get_total_income(self):
        return self._income['wage'] + self._income['bonus']


worker = Position('Slava', 'Romantsov', 'Frontend', 2000, 350)
print(f'{worker.get_full_name()} {worker.position} {worker.get_total_income()}')


# 4
class Car:
    # atributes
    def __init__(self, speed, color, name, is_police):
        self.speed = speed
        self.color = color
        self.name = name
        self.is_police = is_police

    # methods
    def go(self):
        return f'{self.name} start'

    def stop(self):
        return f'{self.name} stop'

    def turn_right(self):
        return f'{self.name} turn right'

    def turn_left(self):
        return f'{self.name} turn left'

    def show_speed(self):
        return f'{self.name} speed is {self.speed}'


class TownCar(Car):
    def __init__(self, speed, color, name, is_police):
        super().__init__(speed, color, name, is_police)

    def show_speed(self):
        if self.speed > 60:
            return f'{self.name} speed  is out of limits'


class SportCar(Car):
    def __init__(self, speed, color, name, is_police):
        super().__init__(speed, color, name, is_police)


class WorkCar(Car):
    def __init__(self, speed, color, name, is_police):
        super().__init__(speed, color, name, is_police)

    def show_speed(self):
        if self.speed > 40:
            return f'{self.name} is out of limits'


class PoliceCar(Car):
    def __init__(self, speed, color, name, is_police):
        super().__init__(speed, color, name, is_police)

    def police(self):
        if self.is_police:
            return f'{self.name} is police car'


mercedes = SportCar(150, 'Red', 'Mercedes-benz', False)
solaris = TownCar(70, 'Silver', 'Hyundai Solaris', False)

print(mercedes.go())
print(mercedes.turn_right())
print(solaris.show_speed())


# 5
class Stationery:
    def __init__(self, title):
        self.title = title

    def draw(self):
        print('Запуск отрисовки.')


class Pen(Stationery):
    def __init__(self, title):
        super().__init__(title)

    def draw(self):
        print(f'У вас в руках {self.title}')


class Pencil(Stationery):
    def __init__(self, title):
        super().__init__(title)

    def draw(self):
        print(f'У вас в руках {self.title}')


class Handle(Stationery):
    def __init__(self, title):
        super().__init__(title)

    def draw(self):
        print(f'У вас в руках {self.title}')


regular_pencil = Pencil('Обычный карандаш')
regular_pencil.draw()