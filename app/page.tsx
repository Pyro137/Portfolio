import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Mail, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col pl-10">
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="font-bold">
            Metin Işıkcan
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4">
              Hakkımda
            </Link>
            <Link href="#education" className="text-sm font-medium hover:underline underline-offset-4">
              Eğitim
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:underline underline-offset-4">
              Projeler
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:underline underline-offset-4">
              Yetenekler
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
              İletişim
            </Link>
          </nav>
          <Button asChild>
            <Link href="#contact">İletişime Geç</Link>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="container py-24 sm:py-32">
          <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Merhaba, Ben <span className="text-primary">Metin Işıkcan</span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  Bilgisayar Mühendisliği Öğrencisi, Çukurova Üniversitesi
                </p>
              </div>
              <div className="flex gap-4">
                <Button asChild variant="outline" size="icon">
                  <Link href="https://github.com/Pyro137" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                </Button>
                <Button asChild variant="outline" size="icon">
                  <Link href="mailto:metinisikcan@gmail.com">
                    <Mail className="h-4 w-4" />
                    <span className="sr-only">Email</span>
                  </Link>
                </Button>
                <Button asChild variant="outline" size="icon">
                  <Link href="tel:+905454685837">
                    <Phone className="h-4 w-4" />
                    <span className="sr-only">Phone</span>
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative aspect-square w-full max-w-[400px] overflow-hidden rounded-xl">
                <Image
                  src="126709211.jpg"
                  alt="Metin Işıkcan"
                  className="object-cover"
                  priority
                  fill
                />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="container py-24 sm:py-32">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Hakkımda</h2>
              <p className="mt-4 text-muted-foreground">
                Çukurova Üniversitesi'nde Bilgisayar Mühendisliği eğitimi alan, yazılım geliştirme ve veri bilimi
                alanlarında kendini geliştiren bir öğrenciyim. Frontend ve backend teknolojilerinde deneyim sahibiyim ve
                sürekli olarak yeni teknolojiler öğrenmeye açığım.
              </p>
              <p className="mt-4 text-muted-foreground">
                Yapay zeka, makine öğrenmesi, web ve mobil uygulama geliştirme alanlarında ilgi duyuyorum. Fullstack
                yazılım geliştirme konusunda kendimi geliştirmeye devam ediyorum.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative aspect-video w-full overflow-hidden rounded-xl ml-60">
                <Image
                  src="çü.png"
                  alt="Çukurova Üniversitesi"
                  className="object-cover"
                  width={250}
                  height={300}
                />
              </div>
            </div>
          </div>
        </section>

        <section id="education" className="bg-muted/50">
          <div className="container py-24 sm:py-32">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Eğitim</h2>
            <div className="max-w-3xl mx-auto">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                      <h3 className="text-xl font-bold">Lisans, Bilgisayar Mühendisliği</h3>
                      <p className="text-muted-foreground">Çukurova Üniversitesi</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="projects" className="container py-24 sm:py-32">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Projelerim</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="p-0">
                <div className="relative aspect-video w-full overflow-hidden rounded-t-xl">
                  <Image
                    src="expense.png"
                    alt="Expense Tracker"
                    className="object-cover"
                    fill
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">Expense Tracker</h3>
                  <p className="text-muted-foreground mt-2">
                    JavaScript ile geliştirilmiş harcama takip uygulaması. Kullanıcıların günlük harcamalarını
                    kategorilere göre takip etmelerini sağlar.
                  </p>
                  <div className="flex gap-2 mt-4">
                    <Button asChild size="sm" variant="outline">
                      <Link href="https://github.com/Pyro137/expense-tracker" target="_blank" rel="noopener noreferrer">
                        Kaynak Kodu
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-0">
                <div className="relative aspect-video w-full overflow-hidden rounded-t-xl">
                  <Image
                    src="üniversity.PNG"
                    alt="University Library"
                    className="object-cover"
                    fill
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">University Library</h3>
                  <p className="text-muted-foreground mt-2">
                    TypeScript tabanlı üniversite kütüphane yönetim sistemi. Kitap ödünç alma, iade ve rezervasyon
                    işlemlerini yönetir.
                  </p>
                  <div className="flex gap-2 mt-4">
                    <Button asChild size="sm" variant="outline">
                      <Link href="https://github.com/Pyro137/university-library" target="_blank" rel="noopener noreferrer">
                        Kaynak Kodu
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-0">
                <div className="relative aspect-video w-full overflow-hidden rounded-t-xl">
                  <Image
                    src="chat-app.PNG"
                    alt="Chat app"
                    className="object-cover"
                    fill
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">Chat App</h3>
                  <p className="text-muted-foreground mt-2">
                    Basit bir websocket, express ve react ile chat uygulaması yaptım.
                  </p>
                  <div className="flex gap-2 mt-4">
                    <Button asChild size="sm" variant="outline">
                      <Link href="https://github.com/Pyro137/Chat-app" target="_blank" rel="noopener noreferrer">
                        Kaynak Kodu
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-0">
                <div className="relative aspect-video w-full overflow-hidden rounded-t-xl">
                  <Image
                    src="fakestragram.PNG"
                    alt="Fakestagram"
                    className="object-cover"
                    fill
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">Fakestagram</h3>
                  <p className="text-muted-foreground mt-2">
                    React native ile back-end ve fron-end'ini kendim yaptığım instagram klonu.
                  </p>
                  <div className="flex gap-2 mt-4">
                    <Button asChild size="sm" variant="outline">
                      <Link href="https://github.com/Pyro137/Fakestagram" target="_blank" rel="noopener noreferrer">
                        Kaynak Kodu
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            


          </div>
        </section>

        <section id="skills" className="bg-muted/50">
          <div className="container py-24 sm:py-32">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              Teknik Yetenekler
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="flex flex-col items-center p-6">
                  <div className="rounded-full bg-primary/10 p-4 mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-primary"
                    >
                      <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-center">Frontend</h3>
                  <p className="text-center text-muted-foreground mt-2">
                    JavaScript, React, React Native, Next.js, TypeScript, CSS
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex flex-col items-center p-6">
                  <div className="rounded-full bg-primary/10 p-4 mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-primary"
                    >
                      <path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"></path>
                      <path d="m8 16 4-4 4 4"></path>
                      <path d="M16 16v6"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-center">Backend</h3>
                  <p className="text-center text-muted-foreground mt-2">Python, Django, Flask, FastAPI</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex flex-col items-center p-6">
                  <div className="rounded-full bg-primary/10 p-4 mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-primary"
                    >
                      <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-center">Veritabanları</h3>
                  <p className="text-center text-muted-foreground mt-2">SQL, NoSQL</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex flex-col items-center p-6">
                  <div className="rounded-full bg-primary/10 p-4 mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-primary"
                    >
                      <path d="M12 2H2v10h10V2Z"></path>
                      <path d="M12 12H2v10h10V12Z"></path>
                      <path d="M22 2h-10v10h10V2Z"></path>
                      <path d="M22 12h-10v10h10V12Z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-center">Veri Bilimi</h3>
                  <p className="text-center text-muted-foreground mt-2">
                    Machine Learning, NumPy, Matplotlib, Jupyter Notebook
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex flex-col items-center p-6">
                  <div className="rounded-full bg-primary/10 p-4 mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-primary"
                    >
                      <path d="M17 6.1H3"></path>
                      <path d="M21 12.1H3"></path>
                      <path d="M15.1 18H3"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-center">API Geliştirme</h3>
                  <p className="text-center text-muted-foreground mt-2">REST API, GraphQL</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex flex-col items-center p-6">
                  <div className="rounded-full bg-primary/10 p-4 mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-primary"
                    >
                      <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                      <path d="M9 9h6"></path>
                      <path d="M9 15h6"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-center">UI/UX</h3>
                  <p className="text-center text-muted-foreground mt-2">Figma, UI Kitleri</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="languages" className="container py-24 sm:py-32">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
            Dil Becerileri
          </h2>
          <div className="grid gap-8 md:grid-cols-2 max-w-3xl mx-auto">
            <Card>
              <CardContent className="flex flex-col items-center p-6">
                <h3 className="text-xl font-bold">Türkçe</h3>
                <p className="text-muted-foreground mt-2">Anadil</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex flex-col items-center p-6">
                <h3 className="text-xl font-bold">İngilizce</h3>
                <p className="text-muted-foreground mt-2">Profesyonel Çalışma Yeterliliği</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="interests" className="bg-muted/50">
          <div className="container py-24 sm:py-32">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              İlgi Alanları
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="rounded-full bg-background px-4 py-2 text-sm font-medium">
                Yapay Zeka ve Makine Öğrenmesi
              </div>
              <div className="rounded-full bg-background px-4 py-2 text-sm font-medium">Web Uygulama Geliştirme</div>
              <div className="rounded-full bg-background px-4 py-2 text-sm font-medium">Mobil Uygulama Geliştirme</div>
              <div className="rounded-full bg-background px-4 py-2 text-sm font-medium">
                Fullstack Yazılım Geliştirme
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="container py-24 sm:py-32">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">İletişime Geç</h2>
              <p className="mt-4 text-muted-foreground">
                Projelerim veya işbirliği fırsatları hakkında konuşmak isterseniz, benimle iletişime geçmekten
                çekinmeyin. Aşağıdaki iletişim bilgilerinden veya iletişim formunu doldurarak bana ulaşabilirsiniz.
              </p>
              <div className="mt-6 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <a href="mailto:metinisikcan@gmail.com" className="hover:underline">
                    metinisikcan@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  <a href="tel:+905454685837" className="hover:underline">
                    +90 545 468 5837
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Github className="h-5 w-5 text-primary" />
                  <Link
                    href="https://github.com/Pyro137"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    github.com/Pyro137
                  </Link>
                </div>
              </div>
            </div>
            <div className="rounded-xl border bg-background p-6">
              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      İsim
                    </label>
                    <input
                      id="name"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="İsminiz"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      E-posta
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="E-posta adresiniz"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Konu
                  </label>
                  <input
                    id="subject"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Konu"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Mesaj
                  </label>
                  <textarea
                    id="message"
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Mesajınız"
                  ></textarea>
                </div>
                <Button type="submit" className="w-full">
                  Mesaj Gönder
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Metin Işıkcan. Tüm hakları saklıdır.
          </p>
          <div className="flex gap-4">
            <Button asChild variant="ghost" size="icon">
              <Link href="https://github.com/Pyro137" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button asChild variant="ghost" size="icon">
              <Link href="mailto:metinisikcan@gmail.com">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
            <Button asChild variant="ghost" size="icon">
              <Link href="tel:+905454685837">
                <Phone className="h-4 w-4" />
                <span className="sr-only">Phone</span>
              </Link>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}

