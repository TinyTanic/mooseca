import React from 'react'

var QueueView = React.createClass({

   render() {

      return (
         <div className="queueview">
         <div className="container">
            <table>
               <tr>
                  <th>{'#'}</th>
                  <th>{'Titolo'}</th>
                  <th>{'Album'}</th>
                  <th>{'Artista'}</th>
                  <th>{'Genere'}</th>
                  <th>{'Durata'}</th>
               </tr>
               <tr>
                  <td>{'1'}</td>
                  <td>{'un titolo'}</td>
                  <td>{'un album'}</td>
                  <td>{'un artista'}</td>
                  <td>{'un genere'}</td>
                  <td>{'3:43'}</td>
               </tr>
               <tr>
                  <td>{'2'}</td>
                  <td>{'due titolo'}</td>
                  <td>{'due album'}</td>
                  <td>{'due artista'}</td>
                  <td>{'due genere'}</td>
                  <td>{'3:43'}</td>
               </tr>
               <tr>
                  <td>{'3'}</td>
                  <td>{'tre titolo'}</td>
                  <td>{'tre album'}</td>
                  <td>{'tre artista'}</td>
                  <td>{'tre genere'}</td>
                  <td>{'3:43'}</td>
               </tr>
            </table>
            </div>
         </div>
      )
   }
})

export default QueueView
