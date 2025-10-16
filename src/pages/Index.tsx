import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

interface Metal {
  symbol: string;
  name: string;
  atomicNumber: number;
  properties: string[];
  applications: string[];
  toxicity: string;
  color: string;
}

const metals: Metal[] = [
  {
    symbol: 'Pb',
    name: 'Свинец',
    atomicNumber: 82,
    properties: ['Плотность: 11.34 г/см³', 'Температура плавления: 327°C', 'Мягкий, ковкий металл'],
    applications: ['Аккумуляторы', 'Защита от радиации', 'Припои'],
    toxicity: 'Высокая токсичность. Поражает нервную систему, почки, костный мозг',
    color: 'bg-slate-600'
  },
  {
    symbol: 'Hg',
    name: 'Ртуть',
    atomicNumber: 80,
    properties: ['Единственный жидкий металл при комнатной температуре', 'Плотность: 13.55 г/см³', 'Высокая подвижность'],
    applications: ['Термометры (устаревшее)', 'Люминесцентные лампы', 'Электролиз'],
    toxicity: 'Крайне токсична. Поражает ЦНС, почки, дыхательные пути',
    color: 'bg-gray-400'
  },
  {
    symbol: 'Cd',
    name: 'Кадмий',
    atomicNumber: 48,
    properties: ['Плотность: 8.65 г/см³', 'Температура плавления: 321°C', 'Мягкий, вязкий металл'],
    applications: ['Никель-кадмиевые аккумуляторы', 'Пигменты', 'Гальванические покрытия'],
    toxicity: 'Высокая токсичность. Канцероген, поражает почки',
    color: 'bg-zinc-500'
  },
  {
    symbol: 'As',
    name: 'Мышьяк',
    atomicNumber: 33,
    properties: ['Металлоид', 'Хрупкий', 'Имеет несколько аллотропных форм'],
    applications: ['Полупроводники', 'Сплавы', 'Пестициды (устаревшее)'],
    toxicity: 'Сильный яд. Канцероген, поражает многие органы',
    color: 'bg-slate-700'
  },
  {
    symbol: 'Cr',
    name: 'Хром',
    atomicNumber: 24,
    properties: ['Плотность: 7.19 г/см³', 'Температура плавления: 1907°C', 'Твёрдый, коррозионностойкий'],
    applications: ['Нержавеющая сталь', 'Гальванические покрытия', 'Красители'],
    toxicity: 'Cr(VI) высокотоксичен и канцерогенен',
    color: 'bg-blue-600'
  },
  {
    symbol: 'Ni',
    name: 'Никель',
    atomicNumber: 28,
    properties: ['Плотность: 8.91 г/см³', 'Ферромагнетик', 'Коррозионностойкий'],
    applications: ['Сплавы', 'Катализаторы', 'Аккумуляторы'],
    toxicity: 'Умеренная токсичность. Может вызывать аллергии',
    color: 'bg-emerald-600'
  }
];

const analysisMethod = [
  {
    name: 'Атомно-абсорбционная спектроскопия',
    description: 'Определение концентрации металлов по поглощению света атомами',
    sensitivity: 'Высокая'
  },
  {
    name: 'Масс-спектрометрия с индуктивно-связанной плазмой',
    description: 'Точный метод для определения следовых количеств металлов',
    sensitivity: 'Очень высокая'
  },
  {
    name: 'Рентгенофлуоресцентный анализ',
    description: 'Неразрушающий метод определения элементного состава',
    sensitivity: 'Средняя'
  },
  {
    name: 'Вольтамперометрия',
    description: 'Электрохимический метод для определения тяжелых металлов',
    sensitivity: 'Высокая'
  }
];

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Тяжёлые металлы</h1>
            <div className="hidden md:flex gap-6">
              <Button variant="ghost" size="sm" onClick={() => scrollToSection('home')} className="text-primary-foreground hover:bg-primary/90">
                Главная
              </Button>
              <Button variant="ghost" size="sm" onClick={() => scrollToSection('properties')} className="text-primary-foreground hover:bg-primary/90">
                Свойства
              </Button>
              <Button variant="ghost" size="sm" onClick={() => scrollToSection('applications')} className="text-primary-foreground hover:bg-primary/90">
                Применение
              </Button>
              <Button variant="ghost" size="sm" onClick={() => scrollToSection('classification')} className="text-primary-foreground hover:bg-primary/90">
                Классификация
              </Button>
              <Button variant="ghost" size="sm" onClick={() => scrollToSection('toxicity')} className="text-primary-foreground hover:bg-primary/90">
                Токсичность
              </Button>
              <Button variant="ghost" size="sm" onClick={() => scrollToSection('methods')} className="text-primary-foreground hover:bg-primary/90">
                Методы анализа
              </Button>
              <Button variant="ghost" size="sm" onClick={() => scrollToSection('sources')} className="text-primary-foreground hover:bg-primary/90">
                Источники
              </Button>
            </div>
            <Button variant="ghost" size="sm" className="md:hidden text-primary-foreground">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-6">Тяжёлые металлы в химии</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Комплексное исследование свойств, применения и воздействия тяжёлых металлов на окружающую среду и здоровье человека
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <Card className="hover-scale">
                <CardHeader>
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="Atom" size={24} className="text-primary" />
                  </div>
                  <CardTitle className="text-lg">Химические свойства</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Изучение структуры и реакционной способности</p>
                </CardContent>
              </Card>
              <Card className="hover-scale">
                <CardHeader>
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                    <Icon name="Beaker" size={24} className="text-accent" />
                  </div>
                  <CardTitle className="text-lg">Аналитические методы</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Современные способы обнаружения и количественного анализа</p>
                </CardContent>
              </Card>
              <Card className="hover-scale">
                <CardHeader>
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-destructive/10 flex items-center justify-center">
                    <Icon name="AlertTriangle" size={24} className="text-destructive" />
                  </div>
                  <CardTitle className="text-lg">Токсикология</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Влияние на биологические системы и экологию</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="properties" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">Свойства тяжёлых металлов</h2>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Общие характеристики</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Icon name="Weight" size={20} className="text-primary" />
                      Плотность
                    </h4>
                    <p className="text-sm text-muted-foreground">Плотность выше 5 г/см³ (условная граница)</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Icon name="Thermometer" size={20} className="text-primary" />
                      Температура плавления
                    </h4>
                    <p className="text-sm text-muted-foreground">Варьируется от -39°C (Hg) до 3410°C (W)</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Icon name="Zap" size={20} className="text-primary" />
                      Электропроводность
                    </h4>
                    <p className="text-sm text-muted-foreground">Хорошие проводники электричества</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Icon name="Magnet" size={20} className="text-primary" />
                      Магнитные свойства
                    </h4>
                    <p className="text-sm text-muted-foreground">Никель, кобальт - ферромагнетики</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="classification" className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">Классификация</h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {metals.map((metal) => (
                <Card key={metal.symbol} className="hover-scale">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className={`w-16 h-16 rounded-lg ${metal.color} flex items-center justify-center text-white`}>
                        <div className="text-center">
                          <div className="text-xs">{metal.atomicNumber}</div>
                          <div className="text-2xl font-bold">{metal.symbol}</div>
                        </div>
                      </div>
                      <div>
                        <CardTitle>{metal.name}</CardTitle>
                        <CardDescription>Атомный номер: {metal.atomicNumber}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Tabs defaultValue="properties" className="w-full">
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="properties">Свойства</TabsTrigger>
                        <TabsTrigger value="applications">Применение</TabsTrigger>
                      </TabsList>
                      <TabsContent value="properties" className="space-y-2 mt-4">
                        {metal.properties.map((prop, idx) => (
                          <div key={idx} className="text-sm flex items-start gap-2">
                            <Icon name="Circle" size={8} className="text-primary mt-1.5" />
                            <span>{prop}</span>
                          </div>
                        ))}
                      </TabsContent>
                      <TabsContent value="applications" className="space-y-2 mt-4">
                        {metal.applications.map((app, idx) => (
                          <div key={idx} className="text-sm flex items-start gap-2">
                            <Icon name="CheckCircle2" size={16} className="text-accent mt-0.5" />
                            <span>{app}</span>
                          </div>
                        ))}
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="applications" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">Применение тяжёлых металлов</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Factory" size={24} className="text-primary" />
                  Промышленность
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2"><Icon name="ArrowRight" size={16} className="text-accent mt-0.5" /> Производство сталей и сплавов</li>
                  <li className="flex gap-2"><Icon name="ArrowRight" size={16} className="text-accent mt-0.5" /> Гальванические покрытия</li>
                  <li className="flex gap-2"><Icon name="ArrowRight" size={16} className="text-accent mt-0.5" /> Катализаторы химических реакций</li>
                  <li className="flex gap-2"><Icon name="ArrowRight" size={16} className="text-accent mt-0.5" /> Пигменты и красители</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Cpu" size={24} className="text-primary" />
                  Электроника
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2"><Icon name="ArrowRight" size={16} className="text-accent mt-0.5" /> Полупроводники</li>
                  <li className="flex gap-2"><Icon name="ArrowRight" size={16} className="text-accent mt-0.5" /> Аккумуляторы и батареи</li>
                  <li className="flex gap-2"><Icon name="ArrowRight" size={16} className="text-accent mt-0.5" /> Припои и контакты</li>
                  <li className="flex gap-2"><Icon name="ArrowRight" size={16} className="text-accent mt-0.5" /> Магнитные материалы</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Heart" size={24} className="text-primary" />
                  Медицина
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2"><Icon name="ArrowRight" size={16} className="text-accent mt-0.5" /> Стоматологические сплавы</li>
                  <li className="flex gap-2"><Icon name="ArrowRight" size={16} className="text-accent mt-0.5" /> Диагностические реагенты</li>
                  <li className="flex gap-2"><Icon name="ArrowRight" size={16} className="text-accent mt-0.5" /> Радиозащитные материалы</li>
                  <li className="flex gap-2"><Icon name="ArrowRight" size={16} className="text-accent mt-0.5" /> Имплантаты</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Building2" size={24} className="text-primary" />
                  Строительство
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2"><Icon name="ArrowRight" size={16} className="text-accent mt-0.5" /> Антикоррозионные покрытия</li>
                  <li className="flex gap-2"><Icon name="ArrowRight" size={16} className="text-accent mt-0.5" /> Трубопроводы</li>
                  <li className="flex gap-2"><Icon name="ArrowRight" size={16} className="text-accent mt-0.5" /> Крепёжные элементы</li>
                  <li className="flex gap-2"><Icon name="ArrowRight" size={16} className="text-accent mt-0.5" /> Декоративные материалы</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="toxicity" className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">Токсичность и воздействие на здоровье</h2>
          <div className="max-w-5xl mx-auto space-y-6">
            <Card className="border-destructive">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-destructive">
                  <Icon name="AlertTriangle" size={24} />
                  Механизмы токсического действия
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-destructive/5 rounded-lg">
                    <h4 className="font-semibold mb-2">Блокирование ферментов</h4>
                    <p className="text-sm text-muted-foreground">Связывание с сульфгидрильными группами белков</p>
                  </div>
                  <div className="p-4 bg-destructive/5 rounded-lg">
                    <h4 className="font-semibold mb-2">Окислительный стресс</h4>
                    <p className="text-sm text-muted-foreground">Образование активных форм кислорода</p>
                  </div>
                  <div className="p-4 bg-destructive/5 rounded-lg">
                    <h4 className="font-semibold mb-2">Нарушение клеточных мембран</h4>
                    <p className="text-sm text-muted-foreground">Изменение проницаемости и структуры</p>
                  </div>
                  <div className="p-4 bg-destructive/5 rounded-lg">
                    <h4 className="font-semibold mb-2">Генотоксичность</h4>
                    <p className="text-sm text-muted-foreground">Повреждение ДНК и канцерогенное действие</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-4">
              {metals.map((metal) => (
                <Card key={metal.symbol}>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <div className={`w-10 h-10 rounded ${metal.color} flex items-center justify-center text-white font-bold`}>
                        {metal.symbol}
                      </div>
                      <CardTitle className="text-base">{metal.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Badge variant="destructive" className="mb-2">Токсичность</Badge>
                    <p className="text-sm text-muted-foreground">{metal.toxicity}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="methods" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">Методы анализа</h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {analysisMethod.map((method, idx) => (
              <Card key={idx} className="hover-scale">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2">{method.name}</CardTitle>
                      <CardDescription>{method.description}</CardDescription>
                    </div>
                    <Badge variant={method.sensitivity === 'Очень высокая' ? 'default' : method.sensitivity === 'Высокая' ? 'secondary' : 'outline'}>
                      {method.sensitivity}
                    </Badge>
                  </div>
                </CardHeader>
              </Card>
            ))}
            <Card className="bg-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="FlaskConical" size={24} className="text-primary" />
                  Подготовка проб
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Ключевой этап аналитического процесса, включающий:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex gap-2 items-start">
                    <Icon name="CheckCircle2" size={16} className="text-primary mt-1" />
                    <div>
                      <div className="font-semibold text-sm">Отбор проб</div>
                      <div className="text-xs text-muted-foreground">Репрезентативное взятие образцов</div>
                    </div>
                  </div>
                  <div className="flex gap-2 items-start">
                    <Icon name="CheckCircle2" size={16} className="text-primary mt-1" />
                    <div>
                      <div className="font-semibold text-sm">Консервация</div>
                      <div className="text-xs text-muted-foreground">Предотвращение изменений</div>
                    </div>
                  </div>
                  <div className="flex gap-2 items-start">
                    <Icon name="CheckCircle2" size={16} className="text-primary mt-1" />
                    <div>
                      <div className="font-semibold text-sm">Разложение</div>
                      <div className="text-xs text-muted-foreground">Кислотное или щелочное вскрытие</div>
                    </div>
                  </div>
                  <div className="flex gap-2 items-start">
                    <Icon name="CheckCircle2" size={16} className="text-primary mt-1" />
                    <div>
                      <div className="font-semibold text-sm">Разделение</div>
                      <div className="text-xs text-muted-foreground">Устранение мешающих компонентов</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="sources" className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">Источники и литература</h2>
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="BookOpen" size={24} className="text-primary" />
                  Рекомендуемая литература
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <p className="font-semibold">Неорганическая химия</p>
                    <p className="text-sm text-muted-foreground">Ахметов Н.С. — М.: Высшая школа, 2018</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <p className="font-semibold">Токсикология тяжелых металлов</p>
                    <p className="text-sm text-muted-foreground">Трахтенберг И.М. — Киев: Авиценна, 2020</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <p className="font-semibold">Аналитическая химия</p>
                    <p className="text-sm text-muted-foreground">Золотов Ю.А. — М.: Академия, 2019</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <p className="font-semibold">Химия окружающей среды</p>
                    <p className="text-sm text-muted-foreground">Орлов Д.С. — М.: Высшая школа, 2021</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Globe" size={24} className="text-primary" />
                  Полезные ресурсы
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <a href="#" className="block p-3 rounded hover:bg-muted transition-colors">
                    <div className="font-semibold text-sm">ATSDR - Агентство по токсическим веществам</div>
                    <div className="text-xs text-muted-foreground">База данных токсикологических профилей</div>
                  </a>
                  <a href="#" className="block p-3 rounded hover:bg-muted transition-colors">
                    <div className="font-semibold text-sm">EPA - Агентство по охране окружающей среды</div>
                    <div className="text-xs text-muted-foreground">Нормативы и методы анализа</div>
                  </a>
                  <a href="#" className="block p-3 rounded hover:bg-muted transition-colors">
                    <div className="font-semibold text-sm">WHO - Всемирная организация здравоохранения</div>
                    <div className="text-xs text-muted-foreground">Руководства по качеству воды и воздуха</div>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">© 2024 Образовательный ресурс по тяжёлым металлам</p>
          <p className="text-xs mt-2 opacity-80">Материал подготовлен для образовательных целей</p>
        </div>
      </footer>
    </div>
  );
}
