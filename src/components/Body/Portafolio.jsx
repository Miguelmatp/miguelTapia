import { useState } from 'react';
import '../../css/portafolio.css';

export const Portafolio = () => {
    const [showCayetanoModal, setShowCayetanoModal] = useState(false);
    const [activeCayetanoTab, setActiveCayetanoTab] = useState('landings');
    const [selectedImage, setSelectedImage] = useState(null);

  const figma = <img className='etiquetas figma' src='./assets/svg/figma-color.svg' alt='figma' title='FIGMA' />;
  const html5 = <img className='etiquetas html5' src='./assets/svg/html5-color.svg' alt='html5' title='HTML5' />;
  const js = <img className='etiquetas js' src='./assets/svg/javascript-color.svg' alt='js' title='JS' />;
  const css = <img className='etiquetas css' src='./assets/svg/css3-color.svg' alt='css' title='CSS3' />;
  const react = <img className='etiquetas react' src='./assets/svg/react-color.svg' alt='react' title='REACT' />;
  const github = <img className='etiquetas react' src='./assets/svg/github.svg' alt='github' title='github' />;

  const trabajosCayetano = [
    
    {
        titulo: 'LP Medicina Pregrado',
        descripcion: 'Desarrollo de las +20 carreras de pregrado, como referencia tenemos la de medicina.',
        url: 'https://lp.cayetano.edu.pe/medicina/'
    },{
        titulo: 'Re-Evolución',
        descripcion: 'Utilizando HTML, CSS y JavaScript, animaciones, efectos visuales y formulario integrado para captar leads.',
        url: 'https://lp.cayetano.edu.pe/re-evolucion/'
    },{
        titulo: 'LP Open Beca 18',
        descripcion: 'Utilizando HTML, CSS y JavaScript, animaciones, efectos visuales y formulario integrado para captar leads.',
        url: 'https://lp.cayetano.edu.pe/beca-18/'
    },{
        titulo: 'LP Open Beca 18 - 2',
        descripcion: 'Utilizando HTML, CSS y JavaScript, animaciones, efectos visuales y formulario integrado para captar leads.',
        url: 'https://lp.cayetano.edu.pe/open-beca18/'
    },
    {
        titulo: 'Idiomas Cayetano',
        descripcion: 'Utilizando HTML, CSS y JavaScript, animaciones, efectos visuales y formulario integrado para captar leads.',
        url: 'https://lp.cayetano.edu.pe/idiomas-cayetano/'
    },
    {
        titulo: 'Examen de Clasificación',
        descripcion: 'Utilizando HTML, CSS y JavaScript, animaciones, efectos visuales y formulario integrado para captar leads.',
        url: 'https://lp.cayetano.edu.pe/examen-de-clasificacion/'
    },
    {
        titulo: 'LP de Admisión Pregrado',
        descripcion: 'Primera Landing Desarrollada',
        url: 'https://lp.cayetano.edu.pe/admision-cayetano/'
    },
    {
        titulo: 'LP Cayetano BackStage',
        descripcion: 'Utilizando HTML, CSS y JavaScript, animaciones, efectos visuales y formulario integrado para captar leads.',
        url: 'https://lp.cayetano.edu.pe/cayetano-backstage/'
    },
    {
        titulo: 'LP Human Lab',
        descripcion: 'Utilizando HTML, CSS y JavaScript, animaciones, efectos visuales y formulario integrado para captar leads.',
        url: 'https://lp.cayetano.edu.pe/human-lab/'
    },
    {
        titulo: 'LP Pre Cayetano',
        descripcion: 'Utilizando HTML, CSS y JavaScript, animaciones, efectos visuales y formulario integrado para captar leads.',
        url: 'https://lp.cayetano.edu.pe/pre-cayetano/'
    },
    {
        titulo: 'Salud Lab',
        descripcion: 'Utilizando HTML, CSS y JavaScript, animaciones, efectos visuales y formulario integrado para captar leads.',
        url: 'https://lp.cayetano.edu.pe/salud-lab/'
    },
    // {
    //     titulo: 'Sistema de Inventario',
    //     descripcion: 'Utilizando HTML, CSS y JavaScript, animaciones, efectos visuales y formulario integrado para captar leads.',
    //     url: 'https://lp.cayetano.edu.pe/salud-lab/'
    // },
    // {
    //     titulo: 'LP Especialidades Enfermeria',
    //     descripcion: 'Utilizando HTML, CSS y JavaScript, animaciones, efectos visuales y formulario integrado para captar leads.',
    //     url: 'https://lp.cayetano.edu.pe/segundas-especialidades-enfermeria/'
    // },
    {
        titulo: 'LP PGE Administración en salud',
        descripcion: 'Utilizando HTML, CSS y JavaScript, animaciones, efectos visuales y formulario integrado para captar leads.',
        url: 'https://lp.cayetano.edu.pe/pge-administracion-en-salud/'
    }
  ];
  const proyectosCayetano = [
    {
        titulo: 'Sistema de Gestión de Gastos - Own Media',
        descripcion: 'Este proyecto es un dashboard web de administración de productos y campañas, que permite crear, editar y eliminar productos y campañas asociadas, controlar su estado activo/inactivo, filtrar y buscar registros por nombre o producto, y sincronizar los datos con un backend que maneja presupuestos, campañas y envíos. Es una herramienta integral de gestión que combina control de acceso, validaciones, prevención de duplicados y actualización en tiempo real para facilitar la administración de campañas y recursos dentro de una organización.',
        url: 'OwnMedia-Dashboard.png'
    },{
        titulo: 'Sistema de Gestión de Ingresantes',
        descripcion: 'Sistema web desarrollado para centralizar la gestión de leads e ingresantes, permitiendo a asesores, líderes, supervisores y administradores realizar seguimiento, tipificación, comentarios, reasignación de leads, importación/exportación de bases y control de avances. La plataforma cuenta con filtros dinámicos, gestión de usuarios por roles, vista de progreso general y permisos diferenciados para optimizar el trabajo comercial y mejorar el control de cada etapa del proceso de incorporación.',
        url: 'ingresantes.png',
    },
    {
        titulo: 'Sistema de Gestión Documentaria para Ingresantes',
        descripcion: 'Sistema web desarrollado para centralizar la gestión y validación documentaria de ingresantes universitarios. La plataforma permite sincronizar registros desde sistemas externos, asignar expedientes a asesores, validar documentos obligatorios (DNI, seguro de salud, certificado de estudios y constancia de logros), realizar seguimiento del estado de cada expediente y generar reportes operativos. Además, incorpora un dashboard con indicadores de gestión, filtros avanzados, asignación masiva de expedientes, exportación de información a Excel y control de acceso por roles (superadministrador y backoffice), facilitando el monitoreo y la administración eficiente del proceso de matrícula y revisión documentaria.',
        url: 'BackOffice.png',
    },
    {
        titulo: 'Sistema de Gestión de Inventario',
        descripcion: 'Proyecto web desarrollado con Laravel, React y TypeScript para gestionar productos, categorías, proveedores, usuarios y movimientos de inventario. Permite registrar entradas y salidas, controlar el stock disponible, visualizar productos con bajo inventario y mantener un historial ordenado de operaciones para mejorar la administración interna de un negocio.',
        url: 'inventario.png',
    },
    {
        titulo: 'Sistema de Reservar Cita',
        descripcion: 'Es un sistema web administrativo desarrollado para gestionar citas, disponibilidades y solicitudes de aprobación. La plataforma permite importar horarios disponibles mediante archivos Excel, visualizar la base de disponibilidades, revisar el listado de citas registradas y controlar cambios mediante un flujo de aprobaciones. Cuenta con roles diferenciados para admin y superadmin, donde el administrador puede registrar solicitudes y hacer seguimiento, mientras que el superadmin puede aprobar o rechazar acciones críticas, asegurando un mayor control y trazabilidad del proceso.',
        url: 'reservarCita.png',
    }
  ];

  return (
    <>
      <div className="contenedor" id="portafolio">
        <div className="subContenedor">
          <p className="subtitle">Portafolio</p>

          <div className="ctnPortafolio">

            <div className="item-card-e" data-aos="flip-down">
              <div className="portImg">
                <img src="./assets/img/proyectos/cayetanoHeredia.jpg" alt="Universidad Cayetano Heredia" />
              </div>

              <div className="ctn-item-txt">
                <div className="item-txt">
                  <p className="item-title">Universidad Cayetano Heredia</p>
                  <p className="item-subtitle">Desarrollo Web Front End</p>

                  <div className="ctnLabel">
                    {html5} {js} {css} {react}
                  </div>

                  <div className='ctnBtn'>
                    <button
                      type="button"
                      className='btn btnWeb'
                      onClick={() => setShowCayetanoModal(true)}
                    >
                      Webs
                    </button>
                  </div>
                </div>
              </div>

              <div className="wave"></div>
              <div className="wave"></div>
              <div className="wave"></div>
            </div>

            <div className="item-card-e" data-aos="flip-up">
              <div className="portImg">
                <img src="./assets/img/proyectos/BancoNacion.png" alt="Banco de la Nación" />
              </div>

              <div className="ctn-item-txt">
                <div className="item-txt">
                  <p className="item-title">Banco de la Nación</p>
                  <p className="item-subtitle">Diseño y desarrollo web</p>

                  <div className="ctnLabel">
                    {html5} {js} {css} {figma}
                  </div>

                  <div className='ctnBtn'>
                    <a
                      target='_blank'
                      rel="noreferrer"
                      href='https://www.bn.com.pe/'
                      className='btn btnWeb'
                    >
                      Web
                    </a>

                    <a
                      target='_blank'
                      rel="noreferrer"
                      href='https://www.figma.com/design/QU578AsQlHM87sCu2NlI5g/BN-PRINCIPAL?node-id=0-1&m=dev&t=Eg68bwWsTc64c1ID-1'
                      className='btn btnFigma'
                    >
                      Figma
                    </a>
                  </div>
                </div>
              </div>

              <div className="wave"></div>
              <div className="wave"></div>
              <div className="wave"></div>
            </div>

            <div className="item-card-e" data-aos="flip-down">
              <div className="portImg">
                <img src="./assets/img/proyectos/makeups.png" alt="makEupS" />
              </div>

              <div className="ctn-item-txt">
                <div className="item-txt">
                  <p className="item-title">makE upS</p>
                  <p className="item-subtitle">Diseño UX/UI web y móvil, Flyer, etc.</p>

                  <div className="ctnLabel">
                    {figma}
                  </div>

                  <div className='ctnBtn'>
                    <a
                      target='_blank'
                      rel="noreferrer"
                      href='https://www.figma.com/design/738P6ZJ3hkgVKhwFZTEkLu/makEupS?node-id=0-1&p=f'
                      className='btn btnFigma'
                    >
                      Figma
                    </a>
                  </div>
                </div>
              </div>

              <div className="wave"></div>
              <div className="wave"></div>
              <div className="wave"></div>
            </div>
          </div>
        </div>
      </div>

      {showCayetanoModal && (
        <div className="modalOverlay" onClick={() => setShowCayetanoModal(false)}>
          <div className="modalPortfolio" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="modalClose"
              onClick={() => setShowCayetanoModal(false)}
            >
              ×
            </button>

            <div className="modalHeader">
                <p className="modalTag">Universidad Cayetano Heredia</p>
                {/* <h3>Trabajos realizados</h3> */}
                </div>

                <div className="ctnTabsPortfolio">
                <button
                    type="button"
                    className={`tabPortfolio ${activeCayetanoTab === 'landings' ? 'active' : ''}`}
                    onClick={() => setActiveCayetanoTab('landings')}
                >
                    Landing Page
                </button>

                <button
                    type="button"
                    className={`tabPortfolio ${activeCayetanoTab === 'apps' ? 'active' : ''}`}
                    onClick={() => setActiveCayetanoTab('apps')}
                >
                    Aplicaciones Web
                </button>
            </div>
            {activeCayetanoTab === 'landings' && (
                <div className="modalGrid">
                {trabajosCayetano.map((trabajo, index) => (
                    <a
                    key={index}
                    href={trabajo.url}
                    target="_blank"
                    rel="noreferrer"
                    className="modalWorkCard"
                    >
                    <span className="workNumber">
                        {String(index + 1).padStart(2, '0')}
                    </span>

                    <h4>{trabajo.titulo}</h4>
                    <p>{trabajo.descripcion}</p>

                    <span className="workLink">Ver proyecto →</span>
                    </a>
                ))}
                </div>
            )}
            {activeCayetanoTab === 'apps' && (
                <div className='ctnProyect'>
                {proyectosCayetano.map((proyect, index) => (
                    <div className='itemProyect'>
                        <div className='ctnTxt'>
                            <h2>{proyect.titulo}</h2>
                            <p>{proyect.descripcion}</p>
                        </div>

                        {/* <img src={`./assets/img/sistemas/`+ proyect.url} alt={proyect.titulo} /> */}
                        <img
                            src={`./assets/img/sistemas/${proyect.url}`}
                            alt={proyect.titulo}
                            className="imgProyecto"
                            onClick={() =>
                                setSelectedImage({
                                src: `./assets/img/sistemas/${proyect.url}`,
                                title: proyect.titulo
                                })
                            }
                            />
                    </div>
                ))}
                </div>
            )}
          </div>
        </div>
      )}
      
    {selectedImage && (
        <div className="imageOverlay" onClick={() => setSelectedImage(null)}>
            <div className="imagePopup" onClick={(e) => e.stopPropagation()}>
            <button
                type="button"
                className="imageClose"
                onClick={() => setSelectedImage(null)}
            >
                ×
            </button>

            <img src={selectedImage.src} alt={selectedImage.title} />

            <p>{selectedImage.title}</p>
            </div>
        </div>
        )}
    </>
  );
};