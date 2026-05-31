import { useState } from "react";
import {
  Home,
  CalendarDays,
  BookOpen,
  FolderOpen,
  User,
  Bell,
} from "lucide-react";

export default function App() {
  const [tab, setTab] = useState("home");

  // ---------------- UI ----------------

  const Card = ({ children }) => (
    <div
      style={{
        background: "rgba(255,255,255,0.95)",
        borderRadius: 24,
        padding: 16,
        marginBottom: 16,
        boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
        backdropFilter: "blur(12px)",
        position: "relative",
        zIndex: 2,
      }}
    >
      {children}
    </div>
  );

  const InfoBlock = ({
    title,
    value,
  }) => (
    <div
      style={{
        background: "#eef7fd",
        borderRadius: 18,
        padding: 14,
        marginTop: 10,
        border: "1px solid #d6ebfa",
      }}
    >
      <div
        style={{
          fontSize: 12,
          color: "#6b8ba5",
          marginBottom: 4,
        }}
      >
        {title}
      </div>

      <div
        style={{
          fontWeight: 600,
          color: "#529cd4",
          fontSize: 14,
        }}
      >
        {value}
      </div>
    </div>
  );

  // ---------------- SCREENS ----------------

  const HomeScreen = () => (
    <>
      <Card>
        <h3
          style={{
            margin: 0,
            color: "#529cd4",
          }}
        >
          Главная
        </h3>
  
        <InfoBlock
          title="Сегодня"
          value="4 занятия"
        />
  
        <InfoBlock
          title="Ближайшая пара"
          value="Графический дизайн — 10:20"
        />
  
        <InfoBlock
          title="Статус"
          value="Посещаемость 96%"
        />
      </Card>
  
      <Card>
        <h3
          style={{
            margin: 0,
            color: "#529cd4",
          }}
        >
          Задания
        </h3>
  
        <InfoBlock
          title="Лабораторная"
          value="Сдать до понедельника"
        />
  
        <InfoBlock
          title="Проект"
          value="Защита в пятницу"
        />
      </Card>
  
      <Card>
        <h3
          style={{
            margin: 0,
            color: "#529cd4",
          }}
        >
          Мероприятия
        </h3>
  
        <InfoBlock
          title="15 сентября"
          value="Посвящение в студенты"
        />
  
        <InfoBlock
          title="28 сентября"
          value="Научная конференция"
        />
  
        <InfoBlock
          title="10 октября"
          value="Ярмарка вакансий"
        />
  
        <InfoBlock
          title="22 октября"
          value="День открытых лабораторий"
        />
      </Card>
    </>
  );
  // ---------------- OLD BEAUTIFUL SCHEDULE ----------------

  const ScheduleScreen = () => {
    return (
      <Card>
        <h3
          style={{
            margin: 0,
            color: "#529cd4",
          }}
        >
          📅 Расписание недели
        </h3>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "1fr 1fr",
            gap: 12,
            marginTop: 14,
          }}
        >
          {[
            [
              "Пн",
              [
                [
                  "08:00",
                  "09:30",
                  "МДК.06.05 Дизайн и мультимедийные технологии",
                ],
                [
                  "09:40",
                  "11:10",
                  "МДК.06.05 Дизайн и мультимедийные технологии",
                ],
                [
                  "11:40",
                  "13:10",
                  "Иллюстрирование",
                ],
                [
                  "13:20",
                  "14:50",
                  "Иллюстрирование",
                ],
              ],
            ],

            [
              "Вт",
              [
                [
                  "08:00",
                  "09:30",
                  "МДК.06.01 Типографика и верстка, печатной продукции",
                ],
                [
                  "09:40",
                  "11:10",
                  "МДК.06.01 Типографика и верстка, печатной продукции",
                ],
                [
                  "11:40",
                  "13:10",
                  "Иллюстрирование",
                ],
              ],
            ],

            [
              "Ср",
              [
                [
                  "08:00",
                  "09:30",
                  "МДК.06.05 Дизайн и мультимедийные технологии",
                ],
                [
                  "09:40",
                  "11:10",
                  "МДК.06.05 Дизайн и мультимедийные технологии",
                ],
                [
                  "11:40",
                  "13:10",
                  "МДК.06.01 Типографика и верстка, печатной продукции",
                ],
                [
                  "13:20",
                  "14:50",
                  "МДК.06.01 Типографика и верстка, печатной продукции",
                ],
              ],
            ],

            [
              "Чт",
              [
                [
                  "15:40",
                  "17:15",
                  "МДК.06.05 Дизайн и мультимедийные технологии",
                ],
                [
                  "17:25",
                  "18:55",
                  "МДК.06.05 Дизайн и мультимедийные технологии",
                ],
              ],
            ],

            [
              "Пт",
              [
                [
                  "09:40",
                  "11:10",
                  "Иностранный язык в профессиональной деятельности",
                ],
                [
                  "11:40",
                  "13:10",
                  "Иностранный язык в профессиональной деятельности",
                ],
              ],
            ],

            [
              "Сб",
              [["—", "—", "Отдых"]],
            ],

            [
              "Вс",
              [["—", "—", "Отдых"]],
            ],
          ].map(
            ([day, lessons], i) => (
              <div
                key={i}
                style={{
                  background: "#eef7fd",
                  borderRadius: 20,
                  padding: 12,
                  minHeight: 180,
                  border:
                    "1px solid #d6ebfa",
                }}
              >
                <div
                  style={{
                    fontWeight: "bold",
                    color: "#529cd4",
                    marginBottom: 10,
                    fontSize: 15,
                  }}
                >
                  {day}
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection:
                      "column",
                    gap: 8,
                  }}
                >
                  {lessons.map(
                    (
                      [
                        start,
                        end,
                        name,
                      ],
                      idx
                    ) => (
                      <div
                        key={idx}
                        style={{
                          background: "white",
                          borderRadius: 14,
                          padding:
                            "8px 10px",
                          fontSize: 11,
                          color: "#529cd4",
                          border:
                            "1px solid #dcefff",
                        }}
                      >
                        <div
                          style={{
                            fontWeight: 700,
                          }}
                        >
                          {start} — {end}
                        </div>

                        <div
                          style={{
                            marginTop: 3,
                            color: "#4b6278",
                            fontSize: 12,
                          }}
                        >
                          {name}
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            )
          )}
        </div>
      </Card>
    );
  };

  const CoursesScreen = () => (
    <>
      <Card>
        <h3
          style={{
            margin: 0,
            color: "#529cd4",
          }}
        >
          Курсы
        </h3>
  
        <InfoBlock
          title="Графический дизайн"
          value="Прогресс 88%"
        />
  
        <InfoBlock
          title="Иллюстрирование"
          value="Прогресс 2%"
        />
  
        <InfoBlock
          title="Мультимедийные технологии"
          value="Прогресс 25%"
        />
        <InfoBlock
          title="Типографика и верстка, печатной продукции"
          value="Прогресс 54%"
        />
      </Card>
  
      <Card>
        <h3
          style={{
            margin: 0,
            color: "#529cd4",
          }}
        >
          Незавершённые задания
        </h3>
  
        <InfoBlock
          title="Графический дизайн"
          value="Лабораторная №4 не сдана"
        />
  
        <InfoBlock
          title="Иллюстрирование"
          value="Тестирование до 18 сентября"
        />
  
        <InfoBlock
          title="Мультимедийные технологии"
          value="Проект требует доработки"
        />
      </Card>
  
      <Card>
        <h3
          style={{
            margin: 0,
            color: "#529cd4",
          }}
        >
          Сроки сдачи
        </h3>
  
        <InfoBlock
          title="18 сентября"
          value="Тест по графическому дизайну"
        />
  
        <InfoBlock
          title="21 сентября"
          value="Сдача проекта по иллюстрированию"
        />
  
        <InfoBlock
          title="27 сентября"
          value="Тест по мультимедийным технологиям"
        />
      </Card>
    </>
  );

  const ResourcesScreen = () => (
    <Card>
      <h3
        style={{
          margin: 0,
          color: "#529cd4",
        }}
      >
        Ресурсы
      </h3>

      <div style={{ marginTop: 14 }}>
        <div
          style={{
            color: "#529cd4",
            fontWeight: 700,
            marginBottom: 10,
          }}
        >
          Документы
        </div>

        {[
          "Учебный план",
          "График семестра",
          "Справка",
        ].map((doc, i) => (
          <div
            key={i}
            style={{
              background: "#eef7fd",
              borderRadius: 16,
              padding: 14,
              marginBottom: 10,
              display: "flex",
              justifyContent:
                "space-between",
              alignItems: "center",
              border:
                "1px solid #d6ebfa",
            }}
          >
            <div
              style={{
                color: "#529cd4",
                fontSize: 13,
              }}
            >
              📄 {doc}
            </div>

            <div>⬇️</div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 18 }}>
        <div
          style={{
            color: "#529cd4",
            fontWeight: 700,
            marginBottom: 10,
          }}
        >
          Платежи
        </div>

        {[
          [
            "Сентябрь",
            "Оплачено",
          ],
          [
            "Октябрь",
            "Оплачено",
          ],
          [
            "Ноябрь",
            "Не оплачено",
          ],
        ].map(
          ([month, status], i) => (
            <div
              key={i}
              style={{
                background:
                  "#eef7fd",
                borderRadius: 16,
                padding: 14,
                marginBottom: 10,
                display: "flex",
                justifyContent:
                  "space-between",
                alignItems:
                  "center",
                border:
                  "1px solid #d6ebfa",
              }}
            >
              <div
                style={{
                  color:
                    "#529cd4",
                }}
              >
                {month}
              </div>

              <div
                style={{
                  color:
                    status ===
                    "Оплачено"
                      ? "#2e7d32"
                      : "#c62828",
                  fontWeight: 700,
                  fontSize: 12,
                }}
              >
                {status}
              </div>
            </div>
          )
        )}
      </div>

      <div style={{ marginTop: 18 }}>
        <div
          style={{
            color: "#529cd4",
            fontWeight: 700,
            marginBottom: 10,
          }}
        >
          Общежитие
        </div>

        <div
          style={{
            background: "#eef7fd",
            borderRadius: 16,
            padding: 14,
            border:
              "1px solid #d6ebfa",
          }}
        >
          <div
            style={{
              color: "#529cd4",
              fontSize: 13,
            }}
          >
            📍 Комната 312
          </div>

          <div
            style={{
              color: "#529cd4",
              fontSize: 13,
              marginTop: 6,
            }}
          >
            💡 Оплачено
          </div>
        </div>
      </div>
    </Card>
  );

  const ProfileScreen = () => (
    <>
      <Card>
        <h3
          style={{
            margin: 0,
            color: "#529cd4",
          }}
        >
          Профиль студента
        </h3>
  
        <InfoBlock
          title="ФИО"
          value="Иванов Иван Иванович"
        />
  
        <InfoBlock
          title="Группа"
          value="213Д"
        />
  
        <InfoBlock
          title="Курс"
          value="2 курс"
        />
  
        <InfoBlock
          title="Семестр"
          value="4 семестр"
        />
  
        <InfoBlock
          title="Специальность"
          value="Дизайн(по отраслям)"
        />
      </Card>
  
      <Card>
        <h3
          style={{
            margin: 0,
            color: "#529cd4",
          }}
        >
          Академическая статистика
        </h3>
  
        <InfoBlock
          title="Средний балл"
          value="4.6"
        />
  
        <InfoBlock
          title="Посещаемость"
          value="96%"
        />
  
        <InfoBlock
          title="Закрыто дисциплин"
          value="18 из 20"
        />
      </Card>
  
      <Card>
        <h3
          style={{
            margin: 0,
            color: "#529cd4",
            marginBottom: 16,
          }}
        >
          Прогресс курса
        </h3>
  
        {[
          ["Графический дизайн", 88],
          ["Иллюстрирование", 2],
          ["Мультимедийные технологии", 25],
          ["Типографика и верстка, печатной продукции", 54],
        ].map(([name, value]) => (
          <div
            key={name}
            style={{
              marginBottom: 14,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 5,
                color: "#529cd4",
                fontSize: 13,
                fontWeight: 600,
              }}
            >
              <span>{name}</span>
              <span>{value}%</span>
            </div>
  
            <div
              style={{
                height: 8,
                background: "#dcefff",
                borderRadius: 999,
              }}
            >
              <div
                style={{
                  width: `${value}%`,
                  height: "100%",
                  background: "#529cd4",
                  borderRadius: 999,
                }}
              />
            </div>
          </div>
        ))}
      </Card>
  
      <Card>
        <h3
          style={{
            margin: 0,
            color: "#529cd4",
          }}
        >
          Куратор
        </h3>
  
        <InfoBlock
          title="Преподаватель"
          value="Петрова Елена Сергеевна"
        />
  
        <InfoBlock
          title="Email"
          value="curator@college.ru"
        />
  
        <InfoBlock
          title="Приёмные часы"
          value="Пн–Пт 14:00–16:00"
        />
      </Card>
    </>
  );

  const renderScreen = () => {
    switch (tab) {
      case "schedule":
        return <ScheduleScreen />;

      case "courses":
        return <CoursesScreen />;

      case "resources":
        return <ResourcesScreen />;

      case "profile":
        return <ProfileScreen />;

      default:
        return <HomeScreen />;
    }
  };

  const tabs = [
    ["home", Home, "Главная"],
    [
      "schedule",
      CalendarDays,
      "Расписание",
    ],
    [
      "courses",
      BookOpen,
      "Курсы",
    ],
    [
      "resources",
      FolderOpen,
      "Ресурсы",
    ],
    ["profile", User, "Профиль"],
  ];

  return (
    <div
      style={{
        maxWidth: 420,
        margin: "0 auto",
        minHeight: "100vh",
        background: "#f4f9fd",
        position: "relative",
        overflowX: "hidden",
        fontFamily:
          "Inter, Arial, sans-serif",
      }}
    >
      {/* FIXED HEADER */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: "50%",
          transform:
            "translateX(-50%)",
          width: "100%",
          maxWidth: 420,
          background: "#529cd4",
          padding: 24,
          borderBottomLeftRadius: 34,
          borderBottomRightRadius: 34,
          color: "white",
          zIndex: 100,
          boxShadow:
            "0 10px 30px rgba(0,0,0,0.08)",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: 20,
            top: 20,
            background:
              "rgba(255,255,255,0.16)",
            borderRadius: 14,
            padding: 8,
          }}
        >
          <Bell size={18} />
        </div>

        <div
          style={{
            fontSize: 13,
            opacity: 0.8,
          }}
        >
          Студент
        </div>

        <div
          style={{
            fontSize: 23,
            fontWeight: 700,
            marginTop: 6,
          }}
        >
          Иванов Иван Иванович
        </div>

        <div
          style={{
            marginTop: 14,
            background:
              "rgba(255,255,255,0.16)",
            borderRadius: 18,
            padding: 14,
            backdropFilter:
              "blur(10px)",
          }}
        >
          Средний балл:{" "}
          <b>4.6</b>
        </div>
      </div>

      {/* STARS */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
          pointerEvents: "none",
        }}
      >
        {Array.from({
          length: 280,
        }).map((_, i) => {
          const x =
            (i % 8) * 55 +
            Math.random() * 20;

          const y =
            Math.floor(i / 8) * 70 +
            ((i % 2) * 20 +
              Math.random() * 16);

          return (
            <div
              key={i}
              style={{
                position:
                  "absolute",
                left: x,
                top: y,
                color:
                  "rgba(90,130,170,0.18)",
                fontSize:
                  14 +
                  Math.random() * 14,
                filter:
                  "blur(0.4px)",
              }}
            >
              {i % 2 === 0
                ? "✦"
                : "✧"}
            </div>
          );
        })}
      </div>

      {/* CONTENT */}
      <div
        style={{
          paddingTop: 190,
          paddingBottom: 100,
          paddingLeft: 14,
          paddingRight: 14,
          position: "relative",
          zIndex: 2,
        }}
      >
        {renderScreen()}
      </div>

      {/* NAVBAR */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: "50%",
          transform:
            "translateX(-50%)",
          width: "100%",
          maxWidth: 420,
          height: 78,
          background:
            "rgba(255,255,255,0.96)",
          display: "flex",
          borderTopLeftRadius: 28,
          borderTopRightRadius: 28,
          boxShadow:
            "0 -8px 24px rgba(0,0,0,0.08)",
          zIndex: 100,
          backdropFilter:
            "blur(12px)",
        }}
      >
        {tabs.map(
          ([key, Icon, label]) => {
            const active =
              tab === key;

            return (
              <button
                key={key}
                onClick={() =>
                  setTab(key)
                }
                style={{
                  flex: 1,
                  border: "none",
                  background:
                    "transparent",
                  display: "flex",
                  flexDirection:
                    "column",
                  justifyContent:
                    "center",
                  alignItems:
                    "center",
                  gap: 5,
                  color: active
                    ? "#529cd4"
                    : "#93a7ba",
                  fontSize: 11,
                  fontWeight: active
                    ? 700
                    : 500,
                }}
              >
                <Icon size={22} />
                {label}
              </button>
            );
          }
        )}
      </div>
    </div>
  );
}