// import React from 'react';

// // import 'quill/dist/quill.core.css';
// // import 'quill/dist/quill.snow.css';

// // import Quill from 'quill/core';
// // import Toolbar from 'quill/modules/toolbar';
// // import Snow from 'quill/themes/snow'; //snow works, but need to import and register formats, and replace icons...

// // import Bold from 'quill/formats/bold';
// // import Italic from 'quill/formats/italic';
// // import Header from 'quill/formats/header';
// // import Underline from 'quill/formats/underline';
// // import Link from 'quill/formats/link';
// // import List, { ListItem } from 'quill/formats/list';

// import Icons from 'quill/ui/icons';

// export default class QuillEditor extends React.Component {

//     componentDidMount() {

//         Quill.register({
//             'modules/toolbar': Toolbar,
//             'themes/snow': Snow,
//             'formats/bold': Bold,
//             'formats/italic': Italic,
//             'formats/header': Header,
//             'formats/underline': Underline,
//             'formats/link': Link,
//             'formats/list': List,
//             'formats/list/item': ListItem,
//             'ui/icons': Icons
//         });

//         var icons = Quill.import('ui/icons');
//         icons['bold'] = '<i class="fa fa-bold" aria-hidden="true"></i>';
//         icons['italic'] = '<i class="fa fa-italic" aria-hidden="true"></i>';
//         icons['underline'] = '<i class="fa fa-underline" aria-hidden="true"></i>';
//         icons['link'] = '<i class="fa fa-link" aria-hidden="true"></i>';
//         icons['clean'] = '<i class="fa fa-eraser" aria-hidden="true"></i>';

//         var quill = new Quill('#editor', {
//             theme: 'snow', //this needs to come after the above, which registers Snow...
//             placeholder: "Write something awesome..."
//         });
//     } //componentDidMount

//     render() {
//         return (
//             <div>
//                 <div id="QuillEditor-container">
//                     {/* <!-- Create the editor container --> */}
//                     <div id="editor">
//                         <p>Hello World!</p>
//                         <p>Some initial <strong>bold</strong> text</p>
//                         <p></p>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }
